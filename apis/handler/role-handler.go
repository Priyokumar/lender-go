package handler

import (
	"apis/constants"
	"apis/model"
	"apis/repository"
	"encoding/json"
	"log"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

// GetRolesHandler func
func GetRolesHandler(ctx *gin.Context) {

	roles := make([]model.Role, 0)

	roles = append(roles,
		model.Role{
			ID:            1,
			Name:          constants.Role.ADMIN,
			Description:   "Admin role",
			CreatedAt:     time.Now(),
			LastUpdatedAt: time.Now(),
		},
		model.Role{
			ID:            1,
			Name:          constants.Role.INVESTOR,
			Description:   "Investor role",
			CreatedAt:     time.Now(),
			LastUpdatedAt: time.Now(),
		},
	)

	/* err := repository.FindRoles(&roles)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	} */

	ctx.JSON(200, roles)
}

// GetRoleHandler func
func GetRoleHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	role := new(model.Role)

	err := repository.FindRole(role, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, role)
}

// AddRoleHandler func
func AddRoleHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	role := new(model.Role)

	err := json.NewDecoder(body).Decode(role)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	if idStr != "" {
		id, _ := strconv.ParseInt(idStr, 10, 64)
		role.ID = id
	}

	err = repository.AddOrUpdateRole(role)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Ok")

}

// DeleteRoleHandler func
func DeleteRoleHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteRole(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}
