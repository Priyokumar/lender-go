package helper

import (
	"apis/constants"
	"apis/model"
	"apis/notification"
	"apis/repository"
	"apis/util"
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"strconv"

	"github.com/gin-gonic/gin"
)

func GetLeadFilterQuries(queryMap url.Values) model.Lead {

	var query model.Lead

	customerId := queryMap.Get("customerId")
	leadId := queryMap.Get("leadId")
	productId := queryMap.Get("productId")
	monthlyInterestStr := queryMap.Get("monthlyInterest")
	status := queryMap.Get("status")

	if leadId != "" {
		query.LeadId = leadId
	}

	if customerId != "" {
		query.CustomerId = customerId
	}

	if productId != "" {
		query.ProductId = productId
	}

	if monthlyInterestStr != "" {
		monthlyInterest, _ := strconv.ParseFloat(monthlyInterestStr, 32)
		query.MonthlyInterest = monthlyInterest
	}

	if status != "" {
		query.Status = status
	}

	return query
}

func GetCustomer(custId string) (*model.Customer, error) {

	var queries model.Customer
	queries.CustomerId = custId
	customers, err := repository.FindCustomers(queries)

	if err != nil {
		return nil, fmt.Errorf(err.Error())
	}

	if len(customers) <= 0 {
		return nil, nil
	}

	return &customers[0], nil
}

func GetProduct(productId string) (*model.Product, error) {

	var queries model.Product
	queries.ProductId = productId
	products, err := repository.FindProducts(queries)

	if err != nil {
		return nil, fmt.Errorf(err.Error())
	}

	if len(products) <= 0 {
		return nil, nil
	}

	return &products[0], nil
}

func AddOrUpdateLead(ctx *gin.Context) {

	investorId, err := GetInvestorIdFromToken(ctx)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, err.Error())
		return
	}

	body := ctx.Request.Body
	defer body.Close()

	lead := new(model.Lead)
	lead.InvestorId = investorId

	err = json.NewDecoder(body).Decode(lead)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	customer, err := GetCustomer(lead.CustomerId)

	if err != nil || customer == nil {
		msg := ""

		if err == nil {
			msg = "Invalid customer"
		} else {
			msg = err.Error()
		}
		ctx.JSON(400, msg)
		return
	}

	product, err := GetProduct(lead.ProductId)

	if err != nil || product == nil {
		msg := ""

		if err == nil {
			msg = "Invalid product"
		} else {
			msg = err.Error()
		}
		ctx.JSON(400, msg)
		return
	}

	monthlyInterest := CalculateSimpleInterest(product.Interest, lead.Amount)
	lead.MonthlyInterest = monthlyInterest

	idStr := ctx.Param("id")

	if idStr == "" {
		err = addLead(lead, *customer, *product)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(500, err.Error())
			return
		}
	} else {
		err = updateLead(idStr, lead)
		if err != nil {
			log.Println(err.Error())
			ctx.JSON(500, err.Error())
			return
		}
	}
}

func addLead(lead *model.Lead, customer model.Customer, product model.Product) error {

	err := repository.AddOrUpdateLead(lead)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	lead.Status = constants.LeadStatus.NEW
	lead.LeadId = util.GenerateId(int(lead.ID), constants.PLEAD)
	err = repository.AddOrUpdateLead(lead)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	go notification.SendLeadCreationMail(customer, product)
	return nil
}

func CalculateSimpleInterest(roi, amount float64) float64 {
	return (amount * roi * 1) / 100
}

func updateLead(idStr string, lead *model.Lead) error {

	id, _ := strconv.ParseInt(idStr, 10, 64)
	lead.ID = id

	err := repository.AddOrUpdateLead(lead)
	if err != nil {
		log.Println(err.Error())
		return err
	}
	return nil
}
