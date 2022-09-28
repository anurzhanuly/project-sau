package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Range struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (n Range) DoesMatch() bool {
	return false
}

func (n *Range) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Range) SetCondition(conditions data.Condition) {
	n.DiseaseCondition = conditions
}
