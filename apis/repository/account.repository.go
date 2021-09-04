package repository

import (
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm/clause"
)

// AddOrUpdateAccount func
func AddOrUpdateAccount(account *model.Account) error {
	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(account)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}
	return nil
}

// FindAccounts func
func FindAccounts(queries model.Account) ([]model.Account, error) {

	accounts := make([]model.Account, 0)
	result := database.DB.Find(&accounts, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return accounts, result.Error
	}

	return accounts, nil
}

// FindAccountsByInvestor func
func FindAccountsByInvestor(accounts *[]model.Account, investorId string) error {

	result := database.DB.Find(accounts, "investor_id = ?", investorId)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindAccount func
func FindAccount(account *model.Account, id int64) error {

	result := database.DB.First(account, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteAccount func
func DeleteAccount(id int64) error {

	result := database.DB.Delete(&model.Account{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
