package constants

const (
	PASS  string = "PASS"
	PCUST string = "PCUST"
	PLEAD string = "PLEAD"
	PPROD string = "PPROD"
	PACC  string = "PACC"
	PREP  string = "PREP"
)

//
var AccountStatus = getAccountStatuses()

func getAccountStatuses() *accountStatus {
	return &accountStatus{
		CREATED:   "Created",
		DISBURSED: "Disbursed",
		REJECTED:  "Rejected",
		CLOSED:    "Closed",
	}
}

type accountStatus struct {
	CREATED   string
	DISBURSED string
	REJECTED  string
	CLOSED    string
}

var UserStatus = getUserStatuses()

func getUserStatuses() *userStatus {
	return &userStatus{
		ACTIVE:  "Active",
		EXPIRED: "Expired",
	}
}

type userStatus struct {
	ACTIVE  string
	EXPIRED string
}

var Role = getRole()

func getRole() *role {
	return &role{
		ADMIN:    "Admin",
		INVESTOR: "Investor",
	}
}

type role struct {
	ADMIN    string
	INVESTOR string
}

//
var CustomerStatus = getCustomerStatuses()

func getCustomerStatuses() *customerStatus {
	return &customerStatus{
		ACTIVE:  "Active",
		EXPIRED: "Expired",
	}
}

type customerStatus struct {
	ACTIVE  string
	EXPIRED string
}

//
var LeadStatus = getLeadtStatuses()

func getLeadtStatuses() *leadStatus {
	return &leadStatus{
		NEW:             "New",
		QUALIFIED:       "Qualified",
		DIS_QUALIFIED:   "Dis-qualified",
		CLOSED:          "Closed",
		ACCOUNT_CREATED: "Account Created",
	}
}

type leadStatus struct {
	NEW             string
	QUALIFIED       string
	DIS_QUALIFIED   string
	CLOSED          string
	ACCOUNT_CREATED string
}
