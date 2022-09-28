package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Except struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (e Except) DoesMatch() bool {
	return e.doesMatch()
}

func (e Except) doesMatch() bool {
	return false
}

func (e *Except) SetUserAnswer(answer []string) {
	e.UserAnswer = answer
}

func (e *Except) SetCondition(conditions data.Condition) {
	e.DiseaseCondition = conditions
}
