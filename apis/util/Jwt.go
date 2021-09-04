package util

import (
	"apis/model"
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const jwtKey string = "priyon999"

type Claims struct {
	Name               string `json:"name"`
	Email              string `json:"email"`
	Gender             string `json:"gender"`
	Status             string `json:"status"`
	MobileNo           string `json:"mobileNo"`
	Roles              string `json:"roles"`
	InvestorId         string `json:"investorId"`
	NeedChangePassword bool   `json:"needChangePassword"`
	Authorized         bool   `json:"authorized"`
	Exp                int64  `json:"exp"`
	jwt.StandardClaims
}

func CreateToken(user model.User) (string, error) {

	var claimMap Claims
	claimMap.Authorized = true
	claimMap.Name = user.Name
	claimMap.Email = user.Email
	claimMap.Gender = user.Gender
	claimMap.Status = user.Status
	claimMap.MobileNo = user.MobileNo
	claimMap.InvestorId = user.InvestorId
	claimMap.Roles = user.Roles
	claimMap.NeedChangePassword = user.NeedChangePassword
	claimMap.Exp = time.Now().Add(time.Minute * 15).Unix()

	claim := jwt.NewWithClaims(jwt.SigningMethodHS256, claimMap)
	token, err := claim.SignedString([]byte(jwtKey))

	if err != nil {
		return "", err
	}
	return token, nil
}

func VerifyToken(tokenString string) (*Claims, error) {
	// Initialize a new instance of `Claims`
	claims := &Claims{}

	// Parse the JWT string and store the result in `claims`.
	// Note that we are passing the key in this method as well. This method will return an error
	// if the token is invalid (if it has expired according to the expiry time we set on sign in),
	// or if the signature does not match
	token, err := jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtKey), nil
	})
	if err != nil {
		return nil, fmt.Errorf("invalid token")
	}
	if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
		return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
	}
	if !token.Valid {
		return nil, fmt.Errorf("invalid token")
	}

	return claims, nil
}
