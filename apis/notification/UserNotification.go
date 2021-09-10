package notification

import (
	"apis/mailer"
	"apis/model"
	"fmt"
)

func SendUserWelcomeMail(user model.User, password string) {

	to := []string{user.Email}
	data := map[string]string{
		"name":     user.Name,
		"username": user.Email,
		"password": password,
	}
	templatePath := mailer.TemplateFolder + "/user-welcome.html"

	err := mailer.SendMail(to, "User Credentials", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}

func SendAdminUserWelcomeMail(user model.User, password string) {

	to := []string{user.Email}
	data := map[string]string{
		"name":     user.Name,
		"username": user.Email,
		"password": password,
	}
	templatePath := mailer.TemplateFolder + "/admin-welcome.html"

	err := mailer.SendMail(to, "Admin User Credentials", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
