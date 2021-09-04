package mailer

import (
	"bytes"
	"fmt"
	"html/template"
	"net/smtp"
)

const (
	from     = "lender20042021@gmail.com"
	password = "panthoibi@"
	smtpHost = "smtp.gmail.com"
	smtpPort = "587"
)

func SendMail(to []string, subject string, data map[string]string, templatePath string) error {

	// Authentication.
	auth := smtp.PlainAuth("", from, password, smtpHost)

	t, _ := template.ParseFiles(templatePath)

	var body bytes.Buffer

	mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
	body.Write([]byte(fmt.Sprintf("Subject: "+subject+" \n%s\n\n", mimeHeaders)))

	t.Execute(&body, data)

	// Sending email.
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, body.Bytes())
	if err != nil {
		fmt.Println(err)
		return err
	}
	fmt.Println("Email Sent!")
	return nil
}
