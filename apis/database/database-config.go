package database

import (
	"apis/model"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// DB DB
var DB *gorm.DB

// InitiateDB InitiateDB
func InitiateDB() error {

	log.Println("Initializing DB")
	dsn := "host=localhost user=lender password=lender dbname=lender_dev port=5432 sslmode=disable"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	db.AutoMigrate(
		&model.User{},
		&model.Product{},
		&model.Lead{},
		&model.Customer{},
		&model.Investor{},
		&model.Account{},
		&model.Repayment{},
	)

	if err != nil {
		log.Println(err.Error())
		log.Fatalln("Database initialization failed.")
		return err
	}

	DB = db

	log.Println("Initialized DB")
	return nil
}
