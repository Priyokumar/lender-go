package mailer

import (
	"bytes"
	"crypto/tls"
	"fmt"
	"html/template"

	"gopkg.in/gomail.v2"
)

const (
	from         = "lender@prilax.in"
	password     = "Prilax@123"
	smtpHost     = "smtpout.secureserver.net"
	smtpPort int = 465
)

/* func SendMail(to []string, subject string, data map[string]string, templatePath string) error {

	// Authentication.
	//auth := smtp.PlainAuth("", from, password, smtpHost)

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
} */

func SendMail(to []string, subject string, data map[string]string, templatePath string) error {

	fmt.Println("Sending email")

	/* TEMPLATE */
	fmt.Println("Processing HTML Content")
	t, _ := template.ParseFiles(templatePath)
	var body bytes.Buffer
	t.Execute(&body, data)
	html := body.String()
	/*  */

	m := gomail.NewMessage()
	m.SetHeader("From", from)
	m.SetHeader("To", to...)
	//m.SetAddressHeader("Cc", "dan@example.com", "Dan")
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", html)
	//m.Attach("/home/Alex/lolcat.jpg")

	fmt.Println("Email dialer setting up")
	d := gomail.NewDialer(smtpHost, smtpPort, from, password)
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}

	// Send the email to Bob, Cora and Dan.
	fmt.Println("Dialing and sending")
	if err := d.DialAndSend(m); err != nil {
		panic(err)
	}
	fmt.Println("Email Sent!")
	return nil
}
