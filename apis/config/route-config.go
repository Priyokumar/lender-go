package config

import (
	"apis/handler"
	"apis/middleware"
	"path"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

// SetupRoutes SetupRoutes
func SetupRoutes(routeEngine *gin.Engine) {

	routeEngine.NoRoute(func(c *gin.Context) {
		dir, file := path.Split(c.Request.RequestURI)
		ext := filepath.Ext(file)
		if file == "" || ext == "" {
			c.File("./ui/index.html")
		} else {
			c.File("./ui/" + path.Join(dir, file))
		}
	})

	api := routeEngine.Group("/api")

	// Auth
	api.POST("/login", handler.LoginHandler)
	api.PATCH("/reset-password/:email", handler.SendResetPasswordHandler)

	v1 := api.Group("/v1", middleware.AuthorizeJWT())
	v1.GET("/logout", handler.LogoutHandler)
	v1.GET("/user-data", handler.GetUserDataHandler)
	v1.PATCH("/change-password/:email", handler.ChangePasswordHandler)
	v1.GET("/users", handler.GetUsersHandler)
	v1.GET("/users/:id", handler.GetUserHandler)
	v1.PUT("/users/:id", handler.AddUserHandler)
	// API Protected resources
	v1.GET("/roles", handler.GetRolesHandler)

	// Investor
	v1.GET("/investors", handler.GetInvestorsHandler)
	v1.POST("/investors", handler.AddInvestorHandler)
	v1.GET("/investors/:id", handler.GetInvestorHandler)
	v1.PUT("/investors/:id", handler.AddInvestorHandler)
	v1.DELETE("/investors/:id", handler.DeleteInvestorHandler)

	// Customers
	v1.GET("/customers", handler.GetCustomersHandler)
	v1.POST("/customers", handler.AddCustomerHandler)
	v1.GET("/customers/:id", handler.GetCustomerHandler)
	v1.PUT("/customers/:id", handler.AddCustomerHandler)
	v1.DELETE("/customers/:id", handler.DeleteCustomerHandler)

	// Lead starts
	v1.GET("/leads", handler.GetLeadsHandler)
	v1.POST("/leads", handler.AddLeadHandler)
	v1.GET("/leads/:id", handler.GetLeadHandler)
	v1.PUT("/leads/:id", handler.AddLeadHandler)
	v1.DELETE("/leads/:id", handler.DeleteLeadHandler)
	v1.POST("/monthly/interest", handler.MonthlyInterestHandler)

	// Lead starts
	v1.GET("/leads/active/:customerId", handler.GetActiveLeadsForCustomer)
	// Lead ends

	// Products start
	v1.GET("/products", handler.GetProductsHandler)
	v1.POST("/products", handler.AddOrUpdateProductHandler)
	v1.GET("/products/:id", handler.GetProductHandler)
	v1.PUT("/products/:id", handler.AddOrUpdateProductHandler)
	v1.DELETE("/products/:id", handler.DeleteProductHandler)
	// Products end

	// Account
	v1.GET("/accounts", handler.GetAccountsHandler)
	v1.POST("/accounts", handler.AddOrUpdateAccountHandler)
	v1.GET("/accounts/:id", handler.GetAccountHandler)
	v1.PUT("/accounts/:id", handler.AddOrUpdateAccountHandler)
	v1.DELETE("/accounts/:id", handler.DeleteAccountHandler)

	// Repayments
	v1.GET("/repayments", handler.GetRepaymentsHandler)
	v1.POST("/repayments", handler.AddOrUpdateRepaymentHandler)
	v1.GET("/repayments/:id", handler.GetRepaymentHandler)
	v1.PUT("/repayments/:id", handler.AddOrUpdateRepaymentHandler)
	v1.DELETE("/repayments/:id", handler.DeleteRepaymentHandler)

	// Repayments
	v1.GET("/dashboard/principal-vs-interest", handler.DashboardRunningPrincipalVsInterestHandler)
	v1.GET("/dashboard/principal-vs-interest/:customerId", handler.DashboardPrincipalVsInterestByCustomerHandler)
	v1.GET("/dashboard/year-month/repayments", handler.DashboardYearMonthRepaymentHandler)
	v1.GET("/dashboard/resources/count", handler.DashboardCountsHandler)

}
