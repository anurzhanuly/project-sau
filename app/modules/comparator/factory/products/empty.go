package products

import (
	"anurzhanuly/project-sau/app/modules/diseases/settings"
)

type Empty struct {
	UserAnswer       []string
	DiseaseCondition settings.Model
}

func (n Empty) DoesMatch() bool {
	return false
}

func (n *Empty) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Empty) SetCondition(conditions settings.Model) {
	n.DiseaseCondition = conditions
}
