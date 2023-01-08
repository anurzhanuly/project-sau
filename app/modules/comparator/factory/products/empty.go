package products

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Empty struct {
	UserAnswer       []string
	DiseaseCondition data.ConditionInterface
	UserAnswerInt    []int
}

func (n *Empty) DoesMatch() bool {
	return false
}

func (n *Empty) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Empty) SetCondition(conditions data.ConditionInterface) {
	n.DiseaseCondition = conditions
}

func (n *Empty) SetCastedAnswer(answer []int) {
	n.UserAnswerInt = answer
}
