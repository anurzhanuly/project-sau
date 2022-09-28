package products

import (
	"anurzhanuly/project-sau/app/modules/diseases/settings"
)

type MultiExact struct {
	UserAnswer       []string
	DiseaseCondition settings.Model
}

func (e MultiExact) DoesMatch() bool {
	return doesMatch()
}

func (e MultiExact) doesMatch() bool {
	return false
}

func (e *MultiExact) SetUserAnswer(answer []string) {
	e.UserAnswer = answer
}

func (e *MultiExact) SetCondition(conditions settings.Model) {
	e.DiseaseCondition = conditions
}
