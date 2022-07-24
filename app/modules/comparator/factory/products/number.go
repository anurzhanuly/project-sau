package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Number struct {
	UserAnswer       []string
	DiseaseCondition diseases.Conditions
}

func (n Number) DoesMatch() bool {
	return false
}

func (n *Number) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Number) SetCondition(conditions diseases.Conditions) {
	n.DiseaseCondition = conditions
}
