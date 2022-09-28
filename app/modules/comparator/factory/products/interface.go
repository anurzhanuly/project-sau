package products

import (
	"anurzhanuly/project-sau/app/modules/diseases/settings"
)

type Comparator interface {
	DoesMatch() bool
	SetUserAnswer([]string)
	SetCondition(conditions settings.Model)
}
