package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Optional struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
	UserAnswerInt    []int
}

func (e Optional) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.Values {
		for _, answer := range e.UserAnswer {
			for _, excludedValue := range e.DiseaseCondition.ExcludedValues {
				if excludedValue == answer {
					return false
				}
			}

			if answer == conditionValue {
				return false
			}
		}
	}

	return true
}

func (e *Optional) SetUserAnswer(answer []string) {
	e.UserAnswer = answer
}

func (e *Optional) SetCondition(conditions data.Condition) {
	e.DiseaseCondition = conditions
}

func (e *Optional) SetCastedAnswer(answer []int) {
	e.UserAnswerInt = answer
}
