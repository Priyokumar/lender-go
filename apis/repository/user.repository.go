package repository

import (
	"apis/database"
	"apis/model"
	"log"
	"strings"

	"gorm.io/gorm/clause"
)

// AddUserOrUpdate AddUserOrUpdate
func AddUserOrUpdate(user *model.User) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(user)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindUsers FindUsers
func FindUsers(queries model.User) ([]model.User, error) {

	users := make([]model.User, 0)
	result := database.DB.Find(&users, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return nil, result.Error
	}

	return users, nil
}

// FindUser FindUser
func FindUser(id int64) (*model.User, error) {

	user := new(model.User)
	result := database.DB.First(user, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return nil, result.Error
	}

	return user, nil
}

// FindUserByEmail FindUserByEmail
func FindUserByEmail(email string) (*model.User, error) {

	users := make([]model.User, 0)
	result := database.DB.Find(&users, "email = ?", email)

	if result.Error != nil {

		if strings.Contains(result.Error.Error(), "record not found") {
			return nil, nil
		}

		log.Println(result.Error.Error())
		return nil, result.Error
	}

	if len(users) <= 0 {
		return nil, nil
	}

	return &users[0], nil
}

// FindUserByInvestorId FindUserByInvestorId
func FindUserByInvestorId(user *model.User, investorId string) error {

	result := database.DB.First(user, "investor_id = ?", investorId)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteUser DeleteUser
func DeleteUser(id int64) error {

	result := database.DB.Delete(&model.User{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
