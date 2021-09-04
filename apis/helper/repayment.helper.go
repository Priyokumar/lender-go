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

func GetRepaymentFilterQuries(queryMap url.Values) model.Repayment {

	var query model.Repayment

	repaymentId := queryMap.Get("repaymentId")
	dateOfPayment := queryMap.Get("dateOfPayment")
	status := queryMap.Get("status")
	accountNo := queryMap.Get("accountNo")
	leadId := queryMap.Get("leadId")
	customerId := queryMap.Get("customerId")
	productId := queryMap.Get("productId")

	if dateOfPayment != "" {
		time, err := time.Parse(time.RFC3339, dateOfPayment)
		if err != nil {
			fmt.Println(err.Error())
		} else {
			query.DateOfPayment = time
		}
	}

	if accountNo != "" {
		query.AccountNo = accountNo
	}
	if leadId != "" {
		query.LeadId = leadId
	}
	if customerId != "" {
		query.CustomerId = customerId
	}
	if productId != "" {
		query.ProductId = productId
	}

	if status != "" {
		query.Status = status
	}

	if repaymentId != "" {
		query.RepaymentId = repaymentId
	}

	return query
}

func AddRepayment(ctx *gin.Context, repayment *model.Repayment) {
	err := repository.AddOrUpdateRepayment(repayment)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
	repayment.RepaymentId = util.GenerateId(int(repayment.ID), constants.PREP)
	err = repository.AddOrUpdateRepayment(repayment)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
}

func UpdateRepayment(ctx *gin.Context, repayment *model.Repayment, idStr string) {
	id, _ := strconv.ParseInt(idStr, 10, 64)
	repayment.ID = id
	var repaymentTemp model.Repayment
	repository.FindRepayment(&repaymentTemp, id)
	repayment.RepaymentId = repaymentTemp.RepaymentId

	err := repository.AddOrUpdateRepayment(repayment)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}
}
