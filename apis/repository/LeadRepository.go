package repository

import (
	"apis/constants"
	"apis/database"
	"apis/model"
	"log"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

// AddOrUpdateLead func
func AddOrUpdateLead(lead *model.Lead) error {

	result := database.DB.Clauses(clause.OnConflict{UpdateAll: true}).Create(lead)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindLeads func
func FindLeads(queries model.Lead) ([]model.Lead, error) {

	leads := make([]model.Lead, 0)
	result := database.DB.Find(&leads, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return leads, result.Error
	}

	return leads, nil
}

// FindLeads func
func FindActiveLeadsForCustomer(leads *[]model.Lead, queries model.Lead) error {

	result := database.DB.
		Where("status IN ?", []string{constants.LeadStatus.QUALIFIED, constants.LeadStatus.NEW}).
		Find(leads, queries)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindLeads func
func FindLeadsByCustomerAndInvestor(leads *[]model.Lead, customerId, investorId, role string) error {

	var result *gorm.DB

	if role == constants.Role.ADMIN {
		result = database.DB.
			Where("customer_id = ?", customerId).
			Find(leads)
	} else if role == constants.Role.INVESTOR {
		result = database.DB.
			Where("customer_id = ?", customerId).
			Where("investor_id = ?", investorId).
			Find(leads)
	}

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindLeadsByInvestor func
func FindLeadsByInvestor(leads *[]model.Lead, investorId string) error {

	result := database.DB.Find(leads, "investor_id = ?", investorId)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindLead func
func FindLead(lead *model.Lead, id int64) error {

	result := database.DB.First(lead, "id = ?", id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}

// FindLead func
func FindLeadByLeadId(leadId string) (*model.Lead, error) {

	var lead = new(model.Lead)
	result := database.DB.First(lead, "lead_id = ?", leadId)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return nil, result.Error
	}

	return lead, nil
}

// DeleteLead func
func DeleteLead(id int64) error {

	result := database.DB.Delete(&model.Lead{}, id)

	if result.Error != nil {
		log.Println(result.Error.Error())
		return result.Error
	}

	return nil
}
