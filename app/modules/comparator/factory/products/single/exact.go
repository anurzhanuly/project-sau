package single

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Exact struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (n Exact) DoesMatch() bool {
	return doesMatch()
}

func doesMatch() bool {
	return false
}

func (n *Exact) SetUserAnswer(answer []string) {
	n.UserAnswer = answer
}

func (n *Exact) SetCondition(conditions data.Condition) {
	n.DiseaseCondition = conditions
}
