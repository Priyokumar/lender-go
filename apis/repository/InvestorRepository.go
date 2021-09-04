package repository

import (
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm/clause"
)

// AddInvestor AddInvestor
func AddOrUpdateInvestor(investor *model.Investor) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(investor)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindInvestors FindInvestors
func FindInvestors(queries model.Investor) ([]model.Investor, error) {

	investors := make([]model.Investor, 0)
	result := database.DB.Find(&investors, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return nil, result.Error
	}

	return investors, nil
}

// FindInvestor FindInvestor
func FindInvestor(investor *model.Investor, id int64) error {

	result := database.DB.First(investor, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindInvestorById FindInvestorById
func FindInvestorById(investor *model.Investor, investorId string) error {

	result := database.DB.First(investor, "investor_id = ?", investorId)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteInvestor DeleteInvestor
func DeleteInvestor(id int64) error {

	result := database.DB.Delete(&model.Investor{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
