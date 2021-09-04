package handler

import (
	"apis/helper"
	"apis/mailer"
	"apis/model"
	"apis/repository"
	"encoding/json"
	"fmt"
	"log"
	"strconv"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// GetUsersHandler GetUsersHandler
func GetUsersHandler(ctx *gin.Context) {

	queries := helper.GetUserFilterQuries(ctx.Request.URL.Query())
	users, err := repository.FindUsers(queries)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, users)
}

// GetUserHandler GetUserHandler
func GetUserHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")
	id, _ := strconv.ParseInt(idStr, 10, 64)

	user, err := repository.FindUser(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, user)
}

// AddUserHandler AddUserHandler Not in use
func AddUserHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	user := new(model.User)

	err := json.NewDecoder(body).Decode(user)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	password := user.Password
	fmt.Println(password)

	if idStr != "" {
		id, _ := strconv.ParseInt(idStr, 10, 64)
		user.ID = &id
	} else {
		passByte, _ := bcrypt.GenerateFromPassword([]byte("admin"), 0)
		user.Password = string(passByte)
	}

	err = repository.AddUserOrUpdate(user)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	if idStr == "" {
		go sendWelcomeMail(*user, password)
	}

	ctx.JSON(200, "Ok")

}

// DeleteUserHandler DeleteUserHandler
func DeleteUserHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteUser(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}

func sendWelcomeMail(user model.User, password string) {

	to := []string{user.Email}
	data := map[string]string{
		"name":     "Priyo",
		"username": user.Email,
		"password": password,
	}
	templatePath := "./mailer/template/welcome.html"

	err := mailer.SendMail(to, "Welcome to Lender", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
