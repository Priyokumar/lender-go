package notification

import (
	"apis/mailer"
	"apis/model"
	"fmt"
)

func SendLeadCreationMail(customer model.Customer, product model.Product) {

	to := []string{customer.Email}
	data := map[string]string{"name": customer.Name, "productName": product.Name, "interest": fmt.Sprintf("%f", product.Interest)}
	templatePath := mailer.TemplateFolder + "/lead-creation.html"

	fmt.Println("Sending lead submit mail")

	err := mailer.SendMail(to, "Application submitted", data, templatePath)

	if err != nil {
		fmt.Println("Could not send mail!")
	}
}
