package main

import (
	"apis/config"
	"apis/database"
	"apis/helper"
	"log"

	"github.com/gin-gonic/gin"
)

const port string = ":8000"

func init() {

	// Admin email
	//email := os.Getenv("email")
	email := "lender@prilax.in"
	if email == "" {
		log.Fatalln("Please set env for email.")
	}

	database.InitiateDB()
	helper.CreateAdminUser(email)
}

func main() {

	gin.SetMode(gin.ReleaseMode)
	routeEngine := gin.New()

	/* routeEngine.Use(cors.Middleware(cors.Config{
		Origins:         "*",
		Methods:         "GET, PUT, POST, DELETE PATCH",
		RequestHeaders:  "Origin, Authorization, Content-Type",
		ExposedHeaders:  "",
		MaxAge:          50 * time.Second,
		Credentials:     true,
		ValidateHeaders: false,
	})) */
	config.SetupRoutes(routeEngine)
	log.Fatalln(routeEngine.Run(port))

}
