package handler

import (
	"apis/model"
	"apis/repository"
	"apis/util"
	"encoding/json"
	"log"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// ChangePasswordHandler ChangePasswordHandler
func LoginHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	login := new(model.Login)

	err := json.NewDecoder(body).Decode(login)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	user, err := repository.FindUserByEmail(login.Email)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "User email is invalid.")
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(login.Password))

	if err != nil {
		ctx.JSON(403, "Invalid credential")
		return
	}

	token, err := util.CreateToken(*user)

	if err != nil {
		ctx.JSON(500, err.Error())
		return
	}

	ctx.SetCookie("token", token, 60*60*24, "/", "localhost", true, true)

	ctx.JSON(200, token)
}

func GetUserDataHandler(ctx *gin.Context) {

	token, _ := ctx.Cookie("token")

	claim, _ := util.VerifyToken(token)

	var user model.User

	user.Email = claim.Email
	user.Gender = claim.Gender
	user.MobileNo = claim.MobileNo
	user.Name = claim.Name
	user.Status = claim.Status
	user.Roles = claim.Roles
	user.NeedChangePassword = claim.NeedChangePassword

	ctx.JSON(200, user)

}

func LogoutHandler(ctx *gin.Context) {

	ctx.SetCookie("token", "", 0, "/", "localhost", true, true)

	ctx.JSON(200, "ok")

}
