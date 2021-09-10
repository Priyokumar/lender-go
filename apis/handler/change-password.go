package handler

import (
	"apis/mailer"
	"apis/model"
	"apis/repository"
	"encoding/json"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// ChangePasswordHandler ChangePasswordHandler
func ChangePasswordHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	changePassword := new(model.ChangePassword)

	err := json.NewDecoder(body).Decode(changePassword)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	email := ctx.Param("email")
	user, err := repository.FindUserByEmail(email)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "User ID is invalid.")
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(changePassword.OldPassword))

	if err != nil {
		ctx.JSON(403, "Old password and new password doesn't match.")
		return
	}

	if changePassword.Password != changePassword.ConfirmPassword {
		ctx.JSON(400, "New password and confirm password doesn't match.")
		return
	}

	passByte, _ := bcrypt.GenerateFromPassword([]byte(changePassword.Password), 0)
	user.Password = string(passByte)
	user.NeedChangePassword = false
	err = repository.AddUserOrUpdate(user)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	go sendChangePasswordMail(*user)

	ctx.JSON(200, "Ok")

}

func sendChangePasswordMail(user model.User) {

	to := []string{user.Email}
	data := map[string]string{"name": "Priyo"}
	templatePath := mailer.TemplateFolder + "/change-password.html"

	fmt.Println("sending Change password mail")

	err := mailer.SendMail(to, "Password Changed", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
