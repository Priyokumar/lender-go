package notification

import (
	"apis/mailer"
	"apis/model"
	"fmt"
)

func SendCustomerWelcomeMail(customer model.Customer) {

	to := []string{customer.Email}
	data := map[string]string{"name": customer.Name}
	templatePath := mailer.TemplateFolder + "/customer-welcome.html"

	fmt.Println("Sending welcome mail")

	err := mailer.SendMail(to, "Welcome "+customer.Name, data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
