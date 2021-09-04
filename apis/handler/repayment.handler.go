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

// GetRepaymentsHandler func
func GetRepaymentsHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}
	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		return
	}

	queries := helper.GetRepaymentFilterQuries(ctx.Request.URL.Query())
	if !strings.Contains(role, constants.Role.ADMIN) {
		if role == constants.Role.INVESTOR {
			queries.InvestorId = investorId
		}
	}

	repayments, err := repository.FindRepayments(queries)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	ctx.JSON(200, repayments)
}

// GetRepaymentHandler func
func GetRepaymentHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	repayment := new(model.Repayment)

	err := repository.FindRepayment(repayment, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, repayment)
}

// AddOrUpdateRepaymentHandler func
func AddOrUpdateRepaymentHandler(ctx *gin.Context) {

	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, err.Error())
		return
	}

	body := ctx.Request.Body
	defer body.Close()

	repayment := new(model.Repayment)

	err = json.NewDecoder(body).Decode(repayment)
	repayment.InvestorId = investorId

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	if idStr != "" {
		helper.UpdateRepayment(ctx, repayment, idStr)
	} else {
		helper.AddRepayment(ctx, repayment)
	}
}

// DeleteRepaymentHandler func
func DeleteRepaymentHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteRepayment(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}
