package handler

import (
	"apis/constants"
	"apis/mailer"
	"apis/model"
	"apis/repository"
	"apis/util"
	"fmt"
	"log"
	"math/rand"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// SendResetPasswordLinkHandler SendResetPasswordLinkHandler
func SendResetPasswordHandler(ctx *gin.Context) {

	log.Println("Inside Reset password handler.")
	email := ctx.Param("email")
	user, err := repository.FindUserByEmail(email)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Invalid email")
		return
	}

	if user == nil {
		log.Println("No user found for the email")
		ctx.JSON(400, "No user found for the email")
		return
	}

	passwordStr := util.GenerateId(rand.Intn(200000), constants.PASS)
	passByte, _ := bcrypt.GenerateFromPassword([]byte(passwordStr), 0)
	user.Password = string(passByte)
	user.NeedChangePassword = true

	err = repository.AddUserOrUpdate(user)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	go sendResetPasswordLinkMail(*user, passwordStr)

	ctx.JSON(200, "Ok")

}

func sendResetPasswordLinkMail(user model.User, password string) {
	to := []string{user.Email}
	data := map[string]string{"name": user.Name, "password": password}
	templatePath := "./mailer/template/reset-password.html"

	fmt.Println("Sending reset password mail")

	err := mailer.SendMail(to, "Password reset", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
