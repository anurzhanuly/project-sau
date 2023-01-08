package single

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Exact struct {
	UserAnswer       []string
	DiseaseCondition data.ConditionInterface
	UserAnswerInt    []int
}

func (e *Exact) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.GetValues() {
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

func (e *Exact) SetCondition(conditions data.ConditionInterface) {
	e.DiseaseCondition = conditions
}

func (e *Exact) SetCastedAnswer(answer []int) {
	e.UserAnswerInt = answer
}
