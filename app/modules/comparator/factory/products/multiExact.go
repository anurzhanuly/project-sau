package products

import "anurzhanuly/project-sau/app/modules/diseases"

type MultiExact struct {
	UserAnswer       []string
	DiseaseCondition diseases.Condition
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

func (e *MultiExact) SetCondition(conditions diseases.Condition) {
	e.DiseaseCondition = conditions
}
