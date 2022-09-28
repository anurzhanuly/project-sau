package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Less struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (n Less) DoesMatch() bool {
	return false
}

func (n *Less) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Less) SetCondition(conditions data.Condition) {
	n.DiseaseCondition = conditions
}
