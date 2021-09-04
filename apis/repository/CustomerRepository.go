package repository

import (
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm/clause"
)

// AddOrUpdateCustomer func
func AddOrUpdateCustomer(customer *model.Customer) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(customer)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindCustomers func
func FindCustomers(queries model.Customer) ([]model.Customer, error) {

	customers := make([]model.Customer, 0)
	result := database.DB.Find(&customers, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return nil, result.Error
	}

	return customers, nil
}

// FindCustomers func
func FindCustomersByInvestor(customers *[]model.Customer, investorId string, queries model.Customer) error {

	result := database.DB.Where("investor_id = ?", investorId).Find(customers, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindCustomer func
func FindCustomer(customer *model.Customer, id int64) error {

	result := database.DB.First(customer, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteCustomer func
func DeleteCustomer(id int64) error {

	result := database.DB.Delete(&model.Customer{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
