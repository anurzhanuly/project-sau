package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Text struct {
	UserAnswer       []string
	DiseaseCondition diseases.Conditions
}

func (t Text) DoesMatch() bool {
	return false
}

func (t *Text) SetUserAnswer(answer []string) {
	t.UserAnswer = answer
}

func (t *Text) SetCondition(conditions diseases.Conditions) {
	t.DiseaseCondition = conditions
}
