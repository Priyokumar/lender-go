package helper

import (
	"apis/middleware"
	"apis/util"
	"errors"

	"github.com/gin-gonic/gin"
)

func GetUserRole(ctx *gin.Context) (string, error) {

	token := middleware.ExtractToken(ctx)
	if token == "" {
		ctx.JSON(401, "token not found")
		return "", errors.New("token not found")
	}

	claim, err := util.VerifyToken(token)
	if err != nil {
		ctx.JSON(401, err.Error())
		return "", err
	}

	return claim.Roles, nil
}
