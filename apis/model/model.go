package model

import (
	"time"
)

// User struct
type User struct {
	ID                 *int64    `json:"id" gorm:"primaryKey"`
	Name               string    `json:"name"`
	InvestorId         string    `json:"investorId"`
	Password           string    `json:"password"`
	MobileNo           string    `json:"mobileNo"`
	Email              string    `json:"email" gorm:"unique"`
	Status             string    `json:"status"`
	Roles              string    `json:"roles"`
	Gender             string    `json:"gender"`
	NeedChangePassword bool      `json:"needChangePassword"`
	CreatedAt          time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt      time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// Role struct
type Role struct {
	ID            int64     `json:"id" gorm:"primaryKey"`
	Name          string    `json:"name"`
	Description   string    `json:"description"`
	CreatedAt     time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// ChangePassword struct
type ChangePassword struct {
	OldPassword     string `json:"oldPassword"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

// ResetPassword struct
type ResetPassword struct {
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

// Login struct
type Login struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// Product struct
type Product struct {
	ID             int64     `json:"id"  gorm:"primaryKey"`
	Name           string    `json:"name"`
	ProductId      string    `json:"productId" gorm:"unique"`
	Interest       float64   `json:"interest"`
	Type           string    `json:"type"`
	SecuredProduct bool      `json:"securedProduct"`
	Frequency      string    `json:"frequency"`
	CreatedAt      time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt  time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// Customer struct
type Customer struct {
	ID   int64  `json:"id" gorm:"primaryKey"`
	Name string `json:"name"`

	CustomerId string `json:"customerId" gorm:"unique"`
	InvestorId string `json:"investorId"`

	MobileNo      string    `json:"mobileNo" gorm:"unique"`
	Email         string    `json:"email"`
	Status        string    `json:"status"`
	Gender        string    `json:"gender"`
	Occupation    string    `json:"occupation"`
	Address       string    `json:"address"`
	CreatedAt     time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// Lead struct
type Lead struct {
	ID int64 `json:"id" gorm:"primaryKey"`

	LeadId     string `json:"leadId" gorm:"unique"`
	CustomerId string `json:"customerId"`
	ProductId  string `json:"productId"`
	InvestorId string `json:"investorId"`

	Amount          float64 `json:"amount"`
	MonthlyInterest float64 `json:"monthlyInterest"`
	Status          string  `json:"status"`

	CreatedAt     time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// Account struct
type Account struct {
	ID int64 `json:"id" gorm:"primaryKey"`

	AccountNo  string `json:"accountNo" gorm:"unique"`
	LeadId     string `json:"leadId"`
	CustomerId string `json:"customerId"`
	ProductId  string `json:"productId"`
	InvestorId string `json:"investorId"`

	DateOfCreation time.Time `json:"dateOfCreation"`
	RepaymentDate  time.Time `json:"repaymentDate"`
	ClosingBalance float64   `json:"closingBalance"`
	Status         string    `json:"status"`

	CreatedAt     time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// Repayment struct
type Repayment struct {
	ID int64 `json:"id" gorm:"primaryKey"`

	RepaymentId string `json:"repaymentId" gorm:"unique"`
	AccountNo   string `json:"accountNo"`
	LeadId      string `json:"leadId"`
	CustomerId  string `json:"customerId"`
	ProductId   string `json:"productId"`
	InvestorId  string `json:"investorId"`

	DateOfPayment time.Time `json:"dateOfPayment"`
	AmountPaid    float64   `json:"amountPaid"`
	DueAmount     float64   `json:"dueAmount"`
	Status        string    `json:"status"`

	CreatedAt     time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// Investor
type Investor struct {
	ID            *int64    `json:"id" gorm:"primaryKey"`
	InvestorId    string    `json:"investorId"`
	Name          string    `json:"name"`
	Status        string    `json:"status"`
	Gender        string    `json:"gender"`
	Dob           time.Time `json:"dob"`
	Occupation    string    `json:"occupation"`
	Address       string    `json:"address"`
	MobileNo      string    `json:"mobileNo" gorm:"unique"`
	Email         string    `json:"email" gorm:"unique"`
	PanNo         string    `json:"panCard" gorm:"unique"`
	AadhaarNo     string    `json:"aadhaarNo" gorm:"unique"`
	CreatedAt     time.Time `json:"createdAt" gorm:"autoCreateTime"`
	LastUpdatedAt time.Time `json:"lastUpdatedAt" gorm:"autoCreateTime"`
}

// MInterestCalculation struct
type MInterestCalculation struct {
	Interest float64 `json:"interest"`
	Amount   float64 `json:"amount"`
}

// MInterestCalculation struct
type MaxYear struct {
	Value int `json:"value"`
}

// MInterestCalculation struct
type MonthAndYearRepayment struct {
	Total float64 `json:"total"`
}
