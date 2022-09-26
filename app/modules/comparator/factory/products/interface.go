package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Comparator interface {
	DoesMatch() bool
	SetUserAnswer([]string)
	SetCondition(conditions diseases.Condition)
}
