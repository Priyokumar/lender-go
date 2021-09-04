package repository

import (
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm/clause"
)

// AddOrUpdateProduct func
func AddOrUpdateProduct(product *model.Product) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(product)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindProducts func
func FindProducts(queries model.Product) ([]model.Product, error) {

	products := make([]model.Product, 0)
	result := database.DB.Find(&products, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return nil, result.Error
	}

	return products, nil
}

// FindProduct func
func FindProduct(product *model.Product, id int64) error {

	result := database.DB.First(product, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteProduct func
func DeleteProduct(id int64) error {

	result := database.DB.Delete(&model.Product{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
