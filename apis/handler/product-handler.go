package handler

import (
	"apis/constants"
	"apis/helper"
	"apis/model"
	"apis/repository"
	"apis/util"
	"encoding/json"
	"fmt"
	"log"
	"strconv"

	"github.com/gin-gonic/gin"
)

// GetProductsHandler func
func GetProductsHandler(ctx *gin.Context) {

	queryMap := ctx.Request.URL.Query()
	query := helper.GetProductFilterQuries(queryMap)

	products, err := repository.FindProducts(query)
	if err != nil {
		fmt.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	fmt.Println(products)

	ctx.JSON(200, products)
}

// GetProductHandler func
func GetProductHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	product := new(model.Product)

	err := repository.FindProduct(product, id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, product)
}

// AddOrUpdateProductHandler func
func AddOrUpdateProductHandler(ctx *gin.Context) {

	body := ctx.Request.Body
	defer body.Close()

	product := new(model.Product)

	err := json.NewDecoder(body).Decode(product)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(400, "Malformed request body")
		return
	}

	idStr := ctx.Param("id")

	if idStr != "" {
		id, _ := strconv.ParseInt(idStr, 10, 64)
		product.ID = id
		var productTemp model.Product
		repository.FindProduct(&productTemp, id)
		product.ProductId = productTemp.ProductId
	}

	err = repository.AddOrUpdateProduct(product)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	if idStr == "" {
		product.ProductId = util.GenerateId(int(product.ID), constants.PPROD)
	}

	err = repository.AddOrUpdateProduct(product)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Ok")

}

// DeleteProductHandler func
func DeleteProductHandler(ctx *gin.Context) {

	idStr := ctx.Param("id")

	id, _ := strconv.ParseInt(idStr, 10, 64)

	err := repository.DeleteProduct(id)

	if err != nil {
		log.Println(err.Error())
		ctx.JSON(500, err.Error())
		return
	}

	ctx.JSON(200, "Deleted")

}
