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

// GetAccountsHandler func
func GetAccountsHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}

	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		return
	}

	queryMap := ctx.Request.URL.Query()
	queries := helper.GetAccountFilterQuries(queryMap)

	if !strings.Contains(role, constants.Role.ADMIN) {
		if role == constants.Role.INVESTOR {
			queries.InvestorId = investorId
		}
	}

	accounts, err := repository.FindAccounts(queries)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	fmt.Println(accounts)

	ctx.JSON(200, accounts)
}

// GetAccountHandler func
func GetAccountHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	account := new(model.Account)

	err := repository.FindAccount(account, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, account)
}

// AddOrUpdateAccountHandler func
func AddOrUpdateAccountHandler(ctx *gin.Context) {

	investorId, err := helper.GetInvestorIdFromToken(ctx)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, err.Error())
		return
	}

	body := ctx.Request.Body
	defer body.Close()

	account := new(model.Account)

	err = json.NewDecoder(body).Decode(account)
	account.InvestorId = investorId

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	if idStr == "" {
		helper.AddAccount(ctx, account)
	} else {
		helper.UpdateAccount(ctx, *account, idStr)
	}

}

// DeleteAccountHandler func
func DeleteAccountHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteAccount(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}
