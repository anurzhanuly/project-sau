package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Except struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (e Except) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.Value {
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
