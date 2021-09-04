package util

import "strconv"

func GenerateId(id int, prefix string) string {

	length := len(strconv.Itoa(id))

	var mid string
	for i := 0; i < 4-length; i++ {
		mid += "0"
	}

	return prefix + mid + strconv.Itoa(id)
}

func CheckStringExists(fields []string, searchingField string) bool {
	for _, val := range fields {
		if val == searchingField {
			return true
		}
	}
	return false
}

type MonthCustom struct {
	Key   int
	Value string
	Val   string
}

func GetMonthsMON() []MonthCustom {
	return []MonthCustom{
		{Key: 1, Value: "January", Val: "JAN"},
		{Key: 2, Value: "February", Val: "FEB"},
		{Key: 3, Value: "March", Val: "MAR"},
		{Key: 4, Value: "April", Val: "APR"},
		{Key: 5, Value: "May", Val: "MAY"},
		{Key: 6, Value: "June", Val: "JUN"},
		{Key: 7, Value: "July", Val: "JUL"},
		{Key: 8, Value: "August", Val: "AUG"},
		{Key: 9, Value: "September", Val: "SEP"},
		{Key: 10, Value: "October", Val: "OCT"},
		{Key: 11, Value: "November", Val: "NOV"},
		{Key: 12, Value: "December", Val: "DEC"},
	}
}
