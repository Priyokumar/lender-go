package repository

import (
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm/clause"
)

// AddOrUpdateRole func
func AddOrUpdateRole(role *model.Role) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(role)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindRoles func
func FindRoles(roles *[]model.Role) error {

	result := database.DB.Find(roles)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindRole func
func FindRole(role *model.Role, id int64) error {

	result := database.DB.First(role, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteRole func
func DeleteRole(id int64) error {

	result := database.DB.Delete(&model.Role{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
