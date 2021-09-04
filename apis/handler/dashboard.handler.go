package handler

import (
	"apis/constants"
	"apis/helper"
	"apis/model"
	"apis/repository"
	"apis/util"
	"fmt"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
)

type DashboardCount struct {
	Product   int `json:"product"`
	Customer  int `json:"customer"`
	Lead      int `json:"lead"`
	Account   int `json:"account"`
	Repayment int `json:"repayment"`
}

type DashboardYearMonthRepayment struct {
	YearMonth []string  `json:"yearMonth"`
	Amounts   []float64 `json:"amounts"`
}

// GetAccountsHandler func
func DashboardCountsHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}

	var dashboardCount DashboardCount

	if role == constants.Role.INVESTOR {
		investorId, err := helper.GetInvestorIdFromToken(ctx)
		if err != nil {
			return
		}
		products, err := repository.FindProducts(model.Product{})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Product = len(products)
		customers, err := repository.FindCustomers(model.Customer{InvestorId: investorId})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Customer = len(customers)
		leads, err := repository.FindLeads(model.Lead{InvestorId: investorId})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Lead = len(leads)
		accounts, err := repository.FindAccounts(model.Account{InvestorId: investorId})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Account = len(accounts)
		repayments, err := repository.FindRepayments(model.Repayment{InvestorId: investorId})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Repayment = len(repayments)

	} else {
		products, err := repository.FindProducts(model.Product{})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Product = len(products)
		customers, err := repository.FindCustomers(model.Customer{})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Customer = len(customers)
		leads, err := repository.FindLeads(model.Lead{})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Lead = len(leads)
		accounts, err := repository.FindAccounts(model.Account{})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Account = len(accounts)
		repayments, err := repository.FindRepayments(model.Repayment{})
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		dashboardCount.Repayment = len(repayments)
	}

	labels := []string{"Product", "Customer", "Lead", "Account", "Repayment"}
	values := []string{
		fmt.Sprint(dashboardCount.Product),
		fmt.Sprint(dashboardCount.Customer),
		fmt.Sprint(dashboardCount.Lead),
		fmt.Sprint(dashboardCount.Account),
		fmt.Sprint(dashboardCount.Repayment),
	}

	ctx.JSON(200, map[string][]string{"labels": labels, "values": values})
}

// GetAccountsHandler func
func DashboardRunningPrincipalVsInterestHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}

	var totalPrincipal float64
	var totalInterest float64

	if role == constants.Role.INVESTOR {
		investorId, err := helper.GetInvestorIdFromToken(ctx)
		if err != nil {
			return
		}
		totalPrincipal, err = repository.FindRunningPrincipal(investorId)
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		totalInterest, err = repository.FindRunningInterest(investorId)
		if err != nil {
			ctx.JSON(404, err.Error())
		}
	} else {
		totalPrincipal, err = repository.FindRunningPrincipal("")
		if err != nil {
			ctx.JSON(404, err.Error())
		}
		totalInterest, err = repository.FindRunningInterest("")
		if err != nil {
			ctx.JSON(404, err.Error())
		}
	}

	ctx.JSON(200, map[string]float64{"totalPrincipal": totalPrincipal, "totalInterest": totalInterest})
}

// GetAccountsHandler func
func DashboardPrincipalVsInterestByCustomerHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}

	customerId := ctx.Param("customerId")

	var totalPrincipal float64
	var totalInterest float64

	totalPrincipal, err = repository.FindPrincipalByCustomerId(customerId)
	if err != nil {
		ctx.JSON(404, err.Error())
	}
	totalInterest, err = repository.FindInterestByCustomer(customerId)
	if err != nil {
		ctx.JSON(404, err.Error())
	}

	ctx.JSON(200, map[string]float64{"totalPrincipal": totalPrincipal, "totalInterest": totalInterest})
}

// DashboardYearMonthlyRepaymentHandler func
func DashboardYearMonthRepaymentHandler(ctx *gin.Context) {

	role, err := helper.GetUserRole(ctx)
	if err != nil || role == "" {
		return
	}

	if !strings.Contains(role, constants.Role.ADMIN) {
		investorId, err := helper.GetInvestorIdFromToken(ctx)
		if err != nil {
			return
		}
		getAllRepaymentsByMonthYear(ctx, investorId)
	} else {
		getAllRepaymentsByMonthYear(ctx, "")
	}

}

func getAllRepaymentsByMonthYear(ctx *gin.Context, investorId string) {
	max, err := repository.FindMaxRepaymentYear(investorId)
	if err != nil {
		ctx.JSON(500, err.Error())
		return
	}
	min, err := repository.FindMinRepaymentYear(investorId)
	if err != nil {
		ctx.JSON(500, err.Error())
		return
	}

	length := max - min

	labels := make([]string, 0)
	values := make([]float64, 0)

	for i := 0; i <= length; i++ {
		year := min
		for _, month := range util.GetMonthsMON() {

			label := month.Val + "-" + fmt.Sprint(year)
			value, err := repository.FindRepaymentsByMonthAndYear(model.Repayment{InvestorId: investorId}, label)
			if err != nil {
				ctx.JSON(500, err.Error())
				return
			}
			labels = append(labels, label)
			values = append(values, value)

			if i == length {
				mon := time.Now().Month()
				if mon == time.Month(month.Key) {
					break
				}
			}
		}
		min++
	}

	ctx.JSON(200, map[string]interface{}{"labels": labels, "values": values})

}
