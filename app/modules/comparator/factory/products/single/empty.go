package single

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Empty struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (n Empty) DoesMatch() bool {
	return false
}

func (n *Empty) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Empty) SetCondition(conditions data.Condition) {
	n.DiseaseCondition = conditions
}
