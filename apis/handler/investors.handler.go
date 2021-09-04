package handler

import (
	"apis/helper"
	"apis/model"
	"apis/repository"
	"encoding/json"
	"log"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetInvestorsHandler GetInvestorsHandler
func GetInvestorsHandler(ctx *gin.Context) {

	queries := helper.GetInvestorFilterQuries(ctx.Request.URL.Query())
	investors, err := repository.FindInvestors(queries)

	if err != nil {
		ctx.JSON(404, err.Error())
	}

	ctx.JSON(200, investors)

}

// GetInvestorHandler GetInvestorHandler
func GetInvestorHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	investor := new(model.Investor)

	err := repository.FindInvestor(investor, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, investor)

}

// AddInvestorHandler AddInvestorHandler
func AddInvestorHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	investor := new(model.Investor)

	err := json.NewDecoder(body).Decode(investor)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	if idStr != "" {
		helper.UpdateInvestor(idStr, investor, ctx)
	} else {
		helper.CreateInvestor(investor, ctx)
	}

	ctx.JSON(200, "Ok")
}

// DeleteInvestorHandler DeleteInvestorHandler
func DeleteInvestorHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")
	err := helper.DeleteInvestor(idStr, ctx)
	if err != nil {
		return
	}

	ctx.JSON(200, "Deleted")
}
