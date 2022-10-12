package single

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Exact struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
	UserAnswerInt    []int
}

func (e Exact) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.Values {
		for _, answer := range e.UserAnswer {
			if answer == conditionValue {
				return true
			}
		}
	}

	return false
}

func (e *Exact) SetUserAnswer(answer []string) {
	e.UserAnswer = answer
}

func (e *Exact) SetCondition(conditions data.Condition) {
	e.DiseaseCondition = conditions
}

func (e *Exact) SetCastedAnswer(answer []int) {
	e.UserAnswerInt = answer
}
