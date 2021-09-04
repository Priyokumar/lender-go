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

// GetCustomersHandler func
func GetCustomersHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}
	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		return
	}

	queries := helper.GetCustomerFilterQuries(ctx.Request.URL.Query())

	if !strings.Contains(role, constants.Role.ADMIN) {
		if role == constants.Role.INVESTOR {
			queries.InvestorId = investorId
		}
	}
	customers, err := repository.FindCustomers(queries)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	ctx.JSON(200, customers)
}

// GetCustomerHandler func
func GetCustomerHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	customer := new(model.Customer)

	err := repository.FindCustomer(customer, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, customer)
}

// AddCustomerHandler func
func AddCustomerHandler(ctx *gin.Context) {

	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, err.Error())
		return
	}

	body := ctx.Request.Body
	defer body.Close()

	customer := new(model.Customer)
	customer.InvestorId = investorId

	err = json.NewDecoder(body).Decode(customer)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	if idStr != "" {
		helper.UpdateCustomer(ctx, customer, idStr)
	} else {
		helper.CreateCustomer(ctx, customer)
	}
}

// DeleteCustomerHandler func
func DeleteCustomerHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteCustomer(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}
