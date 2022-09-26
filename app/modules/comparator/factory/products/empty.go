package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Empty struct {
	UserAnswer       []string
	DiseaseCondition diseases.Condition
}

func (n Empty) DoesMatch() bool {
	return false
}

func (n *Empty) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Empty) SetCondition(conditions diseases.Condition) {
	n.DiseaseCondition = conditions
}
