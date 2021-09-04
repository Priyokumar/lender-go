package middleware

import (
	"apis/util"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func AuthorizeJWT() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenString := ExtractToken(c)

		if tokenString == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, "Authorization token is missing")
			return
		}

		claims, err := util.VerifyToken(tokenString)
		if err == nil {
			fmt.Println(claims)
		} else {
			fmt.Println(err)
			c.AbortWithStatusJSON(http.StatusUnauthorized, err.Error())
			return
		}
	}
}

func ExtractToken(c *gin.Context) string {
	token, _ := c.Cookie("token")
	return token
}
