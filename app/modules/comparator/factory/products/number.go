package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Exact struct {
	UserAnswer       []string
	DiseaseCondition diseases.Condition
}

func (n Exact) DoesMatch() bool {
	return false
}

func (n *Exact) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Exact) SetCondition(conditions diseases.Condition) {
	n.DiseaseCondition = conditions
}
