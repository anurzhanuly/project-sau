package products

import (
	"anurzhanuly/project-sau/app/modules/diseases/settings"
)

type Exact struct {
	UserAnswer       []string
	DiseaseCondition settings.Model
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

func (n *Exact) SetCondition(conditions settings.Model) {
	n.DiseaseCondition = conditions
}
