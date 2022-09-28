package products

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Comparator interface {
	DoesMatch() bool
	SetUserAnswer([]string)
	SetCondition(conditions data.Condition)
}
