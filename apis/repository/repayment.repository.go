package repository

import (
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

// AddOrUpdateRepayment func
func AddOrUpdateRepayment(repayment *model.Repayment) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(repayment)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindRepayments func
func FindRepayments(queries model.Repayment) ([]model.Repayment, error) {

	repayments := make([]model.Repayment, 0)
	result := database.DB.Order("date_of_payment asc").Find(&repayments, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return repayments, result.Error
	}

	return repayments, nil
}

// FindRepayments func
func FindRepaymentsByMonthAndYear(queries model.Repayment, monthYear string) (float64, error) {

	total := new(model.MonthAndYearRepayment)
	q := "sum(amount_paid) as total"
	result := new(gorm.DB)
	if queries.InvestorId == "" {
		result = database.DB.
			Model(&model.Repayment{}).
			Select(q).Where("to_char(date_of_payment, 'MON-YYYY') = ? AND status = ?", monthYear, "Paid").
			Scan(total)
	} else {
		result = database.DB.
			Model(&model.Repayment{}).
			Select(q).Where("to_char(date_of_payment, 'MON-YYYY') = ? AND status = ?", monthYear, "Paid").
			Where("investor_id = ?", queries.InvestorId).
			Scan(total)
	}

	if result.Error != nil {
		log.Println(result.Error.Error())
		return total.Total, result.Error
	}
	return total.Total, nil
}

// FindMaxRepaymentYear func
func FindMaxRepaymentYear(investorId string) (int, error) {

	maxYear := new(model.MaxYear)
	q := "max(to_char(date_of_payment, 'YYYY')) as value"
	result := database.DB.Model(&model.Repayment{}).
		Where("status = ?", "Paid").
		Select(q).Scan(maxYear)

	if investorId != "" {
		result = database.DB.Model(&model.Repayment{}).
			Where("status = ?", "Paid").
			Where("investor_id = ?", investorId).
			Select(q).Scan(maxYear)
	}
	if result.Error != nil {
		log.Println(result.Error.Error())
		return maxYear.Value, result.Error
	}
	return maxYear.Value, nil
}

// FindMinRepaymentYear func
func FindMinRepaymentYear(investorId string) (int, error) {

	minYear := new(model.MaxYear)
	q := "min(to_char(date_of_payment, 'YYYY')) as value"
	result := database.DB.Model(&model.Repayment{}).
		Where("status = ?", "Paid").
		Select(q).Scan(minYear)

	if investorId != "" {
		result = database.DB.Model(&model.Repayment{}).
			Where("status = ?", "Paid").
			Where("investor_id = ?", investorId).
			Select(q).Scan(minYear)
	}

	if result.Error != nil {
		log.Println(result.Error.Error())
		return minYear.Value, result.Error
	}
	return minYear.Value, nil
}

// FindRepaymentsByInvestor func
func FindRepaymentsByInvestor(repayments *[]model.Repayment, investorId string) error {

	result := database.DB.Find(repayments, "investor_id = ?", investorId)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindRepayment func
func FindRepayment(repayment *model.Repayment, id int64) error {

	result := database.DB.First(repayment, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// DeleteRepayment func
func DeleteRepayment(id int64) error {

	result := database.DB.Delete(&model.Repayment{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
