package products

import "anurzhanuly/project-sau/app/modules/diseases"

const (
	StringType  = "string"
	IntegerType = "integer"
)

type Comparator interface {
	DoesMatch() bool
	SetUserAnswer([]string)
	SetCondition(conditions diseases.Conditions)
}

type MultiValue interface {
	DoMultiMatch() bool
}
