package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Range struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
	UserAnswerInt    []int
}

func (n *Range) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Range) SetCondition(conditions data.Condition) {
	n.DiseaseCondition = conditions
}

func (n *Range) SetCastedAnswer(answer []int) {
	n.UserAnswerInt = answer
}
