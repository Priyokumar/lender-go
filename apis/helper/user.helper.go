package helper

import (
	"apis/constants"
	"apis/model"
	"apis/notification"
	"apis/repository"
	"apis/util"
	"log"
	"math/rand"
	"net/url"
	"time"

	"golang.org/x/crypto/bcrypt"
)

func GetUserFilterQuries(queryMap url.Values) model.User {

	var query model.User

	name := queryMap.Get("name")
	mobileNo := queryMap.Get("mobileNo")
	email := queryMap.Get("email")
	status := queryMap.Get("status")
	gender := queryMap.Get("gender")

	if name != "" {
		query.Name = name
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

	if gender != "" {
		query.Gender = gender
	}

	return query
}

func CreateAdminUser(email string) {

	user, err := repository.FindUserByEmail(email)

	if err != nil {
		log.Println("Error occurred while fetching users")
		return
	}

	if user != nil {
		log.Println("Has already user for ", email)
		return
	}

	password := util.GenerateId(rand.Intn(200000), constants.PASS)
	encpassword, _ := bcrypt.GenerateFromPassword([]byte(password), 0)
	var adminUser model.User = model.User{
		ID:                 nil,
		Name:               "Admin",
		InvestorId:         "",
		Password:           string(encpassword),
		MobileNo:           "",
		Email:              email,
		Status:             constants.UserStatus.ACTIVE,
		Roles:              constants.Role.ADMIN,
		NeedChangePassword: true,
		Gender:             "",
		CreatedAt:          time.Now(),
		LastUpdatedAt:      time.Now(),
	}

	err = repository.AddUserOrUpdate(&adminUser)

	if err != nil {
		log.Println("Failed to create admin user")
		log.Print(err.Error())
		return
	}

	go notification.SendAdminUserWelcomeMail(adminUser, password)
}
