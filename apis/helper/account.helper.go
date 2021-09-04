package helper

import (
	"apis/constants"
	"apis/model"
	"apis/repository"
	"apis/util"
	"fmt"
	"log"
	"net/url"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func GetAccountFilterQuries(queryMap url.Values) model.Account {

	var query model.Account

	accountNo := queryMap.Get("accountNo")
	leadId := queryMap.Get("leadId")
	customerId := queryMap.Get("customerId")
	productId := queryMap.Get("productId")
	dateOfCreation := queryMap.Get("dateOfCreation")
	repaymentDate := queryMap.Get("repaymentDate")
	closingBalance := queryMap.Get("closingBalance")
	status := queryMap.Get("status")

	if dateOfCreation != "" {
		time, err := time.Parse(time.RFC3339, dateOfCreation)
		if err != nil {
			fmt.Println(err.Error())
		} else {
			query.DateOfCreation = time
		}
	}

	if accountNo != "" {
		query.AccountNo = accountNo
	}
	if customerId != "" {
		query.CustomerId = customerId
	}
	if productId != "" {
		query.ProductId = productId
	}

	if repaymentDate != "" {
		time, err := time.Parse(time.RFC3339, repaymentDate)
		if err != nil {
			fmt.Println(err.Error())
		} else {
			query.RepaymentDate = time
		}
	}

	if closingBalance != "" {
		c, _ := strconv.ParseFloat(closingBalance, 64)
		query.ClosingBalance = c
	}

	if status != "" {
		query.Status = status
	}

	if leadId != "" {
		query.LeadId = leadId
	}

	return query
}

func AddAccount(ctx *gin.Context, account *model.Account) {
	err := repository.AddOrUpdateAccount(account)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	account.AccountNo = util.GenerateId(int(account.ID), constants.PACC)
	err = repository.AddOrUpdateAccount(account)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	go updateLeadStatus(account.LeadId)

	ctx.JSON(200, "Ok")
}

func UpdateAccount(ctx *gin.Context, account model.Account, idStr string) {
	id, _ := strconv.ParseInt(idStr, 10, 64)
	account.ID = id
	var accountTemp model.Account
	repository.FindAccount(&accountTemp, id)
	account.AccountNo = accountTemp.AccountNo
	err := repository.AddOrUpdateAccount(&account)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	ctx.JSON(200, "Updated")
}

func updateLeadStatus(leadId string) {
	lead, err := repository.FindLeadByLeadId(leadId)
	if err != nil {
		log.Println(err.Error())
		return
	}

	lead.Status = constants.LeadStatus.ACCOUNT_CREATED
	err = repository.AddOrUpdateLead(lead)
	if err != nil {
		log.Println(err.Error())
		return
	}
}
