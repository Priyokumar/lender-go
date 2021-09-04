package handler

import (
	"apis/constants"
	"apis/helper"
	"apis/model"
	"apis/repository"
	"encoding/json"
	"fmt"
	"log"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

// GetLeadsHandler func
func GetLeadsHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		ctx.JSON(403, "User has no role")
		return
	}
	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		return
	}
	queries := helper.GetLeadFilterQuries(ctx.Request.URL.Query())

	if !strings.Contains(role, constants.Role.ADMIN) {
		if role == constants.Role.INVESTOR {
			queries.InvestorId = investorId
		}
	}
	leads, err := repository.FindLeads(queries)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	ctx.JSON(200, leads)
}

// GetLeadsHandler func
func GetActiveLeadsForCustomer(ctx *gin.Context) {

	customerId := ctx.Param("customerId")

	var queries model.Lead

	if customerId != "" {
		queries.CustomerId = customerId
	}

	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		return
	}

	queries.InvestorId = investorId

	leads := make([]model.Lead, 0)

	err = repository.FindActiveLeadsForCustomer(&leads, queries)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	ctx.JSON(200, leads)
}

// GetLeadHandler func
func GetLeadHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	lead := new(model.Lead)

	err := repository.FindLead(lead, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, lead)
}

// AddLeadHandler func
func AddLeadHandler(ctx *gin.Context) {
	helper.AddOrUpdateLead(ctx)
}

// Handler func
func MonthlyInterestHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	mInterestCalculation := new(model.MInterestCalculation)

	err := json.NewDecoder(body).Decode(mInterestCalculation)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	interest := helper.CalculateSimpleInterest(mInterestCalculation.Interest, mInterestCalculation.Amount)

	ctx.JSON(200, interest)

}

// DeleteLeadHandler func
func DeleteLeadHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteLead(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}
