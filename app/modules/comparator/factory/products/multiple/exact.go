package multiple

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Exact struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (e Exact) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.Value {
		for _, answer := range e.UserAnswer {
			if answer == conditionValue {
				return true
			}
		}
	}

	return false
}

func (e Exact) doesMatch() bool {
	return false
}

func (e *Exact) SetUserAnswer(answer []string) {
	e.UserAnswer = answer
}

func (e *Exact) SetCondition(conditions data.Condition) {
	e.DiseaseCondition = conditions
}
