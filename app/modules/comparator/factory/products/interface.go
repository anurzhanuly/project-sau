package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Value interface {
	DoesMatch() bool
	SetUserAnswer([]string)
	SetCondition(conditions diseases.Conditions)
}

type MultiValue interface {
	DoMultiMatch() bool
}
