package helper

import (
	"apis/constants"
	"apis/middleware"
	"apis/model"
	"apis/notification"
	"apis/repository"
	"apis/util"
	"errors"
	"log"
	"net/url"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func GetInvestorFilterQuries(queryMap url.Values) model.Investor {

	var query model.Investor

	name := queryMap.Get("name")
	investorId := queryMap.Get("investorId")
	mobileNo := queryMap.Get("mobileNo")
	email := queryMap.Get("email")
	status := queryMap.Get("status")
	gender := queryMap.Get("gender")
	occupation := queryMap.Get("occupation")

	if name != "" {
		query.Name = name
	}

	if investorId != "" {
		query.InvestorId = investorId
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

func CreateInvestor(investor *model.Investor, ctx *gin.Context) error {
	err := repository.AddOrUpdateInvestor(investor)
	if err != nil {
		ctx.JSON(500, err.Error())
		return err
	}
	investor.InvestorId = util.GenerateId(int(*investor.ID), "PINV")
	err = repository.AddOrUpdateInvestor(investor)

	if err != nil {
		repository.DeleteInvestor(*investor.ID)
		ctx.JSON(500, err.Error())
		return err
	}

	go notification.SendInvestorWelcomeMail(*investor)
	go createUser(investor)

	return nil
}

func UpdateInvestor(idStr string, investor *model.Investor, ctx *gin.Context) error {
	id, _ := strconv.ParseInt(idStr, 10, 64)
	investor.ID = &id
	tempInvestor := new(model.Investor)
	err := repository.FindInvestor(tempInvestor, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Invalid id")
		return err
	}
	investor.InvestorId = tempInvestor.InvestorId
	err = repository.AddOrUpdateInvestor(investor)

	if err != nil {
		repository.DeleteInvestor(*investor.ID)
		ctx.JSON(500, err.Error())
		return err
	}
	return nil
}

func deleteUser(investorId string) {
	user := new(model.User)
	err := repository.FindUserByInvestorId(user, investorId)
	if err != nil {
		log.Println(err.Error())
		return
	}

	err = repository.DeleteUser(*user.ID)
	if err != nil {
		log.Println(err.Error())
		return
	}
}

func createUser(investor *model.Investor) {
	password := util.GenerateId(int(*investor.ID), "PASS")
	encPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 0)

	var user model.User = model.User{
		Name:               investor.Name,
		MobileNo:           investor.MobileNo,
		Email:              investor.Email,
		Status:             constants.UserStatus.ACTIVE,
		Password:           string(encPassword),
		ID:                 nil,
		Gender:             investor.Gender,
		CreatedAt:          time.Time{},
		LastUpdatedAt:      time.Time{},
		InvestorId:         investor.InvestorId,
		Roles:              constants.Role.INVESTOR,
		NeedChangePassword: true,
	}

	err := repository.AddUserOrUpdate(&user)

	if err == nil {
		go notification.SendUserWelcomeMail(user, password)
	}
}

func DeleteInvestor(idStr string, ctx *gin.Context) error {

	id, _ := strconv.ParseInt(idStr, 10, 64)

	investor := new(model.Investor)
	err := repository.FindInvestor(investor, id)
	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return err
	}

	err = repository.DeleteInvestor(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return err
	}

	go deleteUser(investor.InvestorId)

	return nil
}

func GetInvestorIdFromToken(ctx *gin.Context) (string, error) {

	token := middleware.ExtractToken(ctx)

	if token == "" {
		ctx.JSON(401, "token not found")
		return "", errors.New("token not found")
	}

	claim, err := util.VerifyToken(token)

	if err != nil {
		ctx.JSON(401, err.Error())
		return "", err
	}

	return claim.InvestorId, nil
}
