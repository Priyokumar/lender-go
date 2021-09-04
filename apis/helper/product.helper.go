package helper

import (
	"apis/model"
	"net/url"
)

func GetProductFilterQuries(queryMap url.Values) model.Product {

	var query model.Product

	name := queryMap.Get("name")
	productId := queryMap.Get("productId")

	if name != "" {
		query.Name = name
	}

	if productId != "" {
		query.ProductId = productId
	}

	return query
}
