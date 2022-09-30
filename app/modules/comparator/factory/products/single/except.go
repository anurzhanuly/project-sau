package single

import "anurzhanuly/project-sau/app/modules/data"

type Except struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
	UserAnswerInt    []int
}

func (e Except) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.Values {
		for _, answer := range e.UserAnswer {
			if answer == conditionValue {
				return false
			}
		}
	}

	return true
}

func (e *Except) SetUserAnswer(answer []string) {
	e.UserAnswer = answer
}

func (e *Except) SetCondition(conditions data.Condition) {
	e.DiseaseCondition = conditions
}

func (e *Except) SetCastedAnswer(answer []int) {
	e.UserAnswerInt = answer
}
