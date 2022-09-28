package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Greater struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (n Greater) DoesMatch() bool {
	return false
}

func (n *Greater) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Greater) SetCondition(conditions data.Condition) {
	n.DiseaseCondition = conditions
}
