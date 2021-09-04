package repository

import (
	"apis/database"
	"log"

	"gorm.io/gorm"
)

// FindAccounts func
func FindRunningPrincipal(investorId string) (float64, error) {

	amounts := []float64{}
	var result *gorm.DB

	if investorId == "" {
		result = database.DB.Table("accounts").Select("leads.amount").Joins("inner join leads on leads.lead_id = accounts.lead_id").Find(&amounts)
	} else {
		result = database.DB.Table("accounts").Select("leads.amount").Joins("inner join leads on leads.lead_id = accounts.lead_id AND accounts.investor_id = ?", investorId).Find(&amounts)
	}

	if result.Error != nil {
		log.Println(result.Error.Error())
		return 0, result.Error
	}
	total := 0.0
	for _, amount := range amounts {
		total += amount
	}
	return total, nil
}

// FindPrincipalByCustomerId func
func FindPrincipalByCustomerId(customerId string) (float64, error) {

	amounts := []float64{}

	result := database.DB.Table("accounts").Select("leads.amount").
		Joins("inner join leads on leads.lead_id = accounts.lead_id").
		Joins("inner join customers on leads.customer_id = customers.customer_id AND customers.customer_id = ?", customerId).
		Find(&amounts)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return 0, result.Error
	}
	total := 0.0
	for _, amount := range amounts {
		total += amount
	}
	return total, nil
}

func FindRunningInterest(investorId string) (float64, error) {

	amounts := []float64{}
	var result *gorm.DB

	if investorId == "" {
		result = database.DB.Table("accounts").Select("repayments.amount_paid").
			Joins("inner join repayments on repayments.account_no = accounts.account_no").Find(&amounts)
	} else {
		result = database.DB.Table("accounts").Select("repayments.amount_paid").
			Joins("inner join repayments on repayments.account_no = accounts.account_no AND accounts.investor_id = ?", investorId).Find(&amounts)
	}

	if result.Error != nil {
		log.Println(result.Error.Error())
		return 0, result.Error
	}
	total := 0.0
	for _, amount := range amounts {
		total += amount
	}
	return total, nil
}

func FindInterestByCustomer(customerId string) (float64, error) {

	amounts := []float64{}
	result := database.DB.Table("accounts").Select("repayments.amount_paid").
		Joins("inner join repayments on repayments.account_no = accounts.account_no").
		Joins("inner join leads on leads.lead_id = accounts.lead_id").
		Joins("inner join customers on leads.customer_id = customers.customer_id AND customers.customer_id = ?", customerId).
		Find(&amounts)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return 0, result.Error
	}
	total := 0.0
	for _, amount := range amounts {
		total += amount
	}
	return total, nil
}
