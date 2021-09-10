package notification

import (
	"apis/mailer"
	"apis/model"
	"fmt"
)

func SendInvestorWelcomeMail(investor model.Investor) {

	to := []string{investor.Email}
	data := map[string]string{"name": investor.Name}
	templatePath := mailer.TemplateFolder + "/investor-welcome.html"

	fmt.Println("Sending welcome mail")

	err := mailer.SendMail(to, "Welcome Investor", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
