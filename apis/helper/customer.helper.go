package helper

import (
	"apis/constants"
	"apis/model"
	"apis/notification"
	"apis/repository"
	"apis/util"
	"log"
	"net/url"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetCustomerFilterQuries(queryMap url.Values) model.Customer {

	var query model.Customer

	name := queryMap.Get("name")
	customerId := queryMap.Get("customerId")
	mobileNo := queryMap.Get("mobileNo")
	email := queryMap.Get("email")
	status := queryMap.Get("status")
	gender := queryMap.Get("gender")
	occupation := queryMap.Get("occupation")

	if name != "" {
		query.Name = name
	}

	if customerId != "" {
		query.CustomerId = customerId
	}

	if mobileNo != "" {
		query.MobileNo = mobileNo
	}

	if email != "" {
		query.Email = email
	}

	if status != "" {
		query.Status = status
	}

	if occupation != "" {
		query.Occupation = occupation
	}

	if gender != "" {
		query.Gender = gender
	}

	return query
}

func CreateCustomer(ctx *gin.Context, customer *model.Customer) {

	err := repository.AddOrUpdateCustomer(customer)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	customer.Status = constants.CustomerStatus.ACTIVE
	customer.CustomerId = util.GenerateId(int(customer.ID), "PCUST")

	err = repository.AddOrUpdateCustomer(customer)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Ok")

	if customer.Email != "" {
		go notification.SendCustomerWelcomeMail(*customer)
	}

}

func UpdateCustomer(ctx *gin.Context, customer *model.Customer, idStr string) {

	id, _ := strconv.ParseInt(idStr, 10, 64)
	customer.ID = id

	err := repository.AddOrUpdateCustomer(customer)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Ok")
}
