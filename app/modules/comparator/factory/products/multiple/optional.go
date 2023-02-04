package multiple

import "anurzhanuly/project-sau/app/modules/data"

type Optional struct {
	UserAnswer       []string
	DiseaseCondition data.ConditionInterface
	UserAnswerInt    []int
}

func (e *Optional) DoesMatch() bool {
	for _, conditionValue := range e.DiseaseCondition.GetValues() {
		for _, answer := range e.UserAnswer {
			for _, excludedValue := range e.DiseaseCondition.GetExcludedValues() {
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

func (e *Optional) SetCondition(conditions data.ConditionInterface) {
	e.DiseaseCondition = conditions
}

func (e *Optional) SetCastedAnswer(answer []int) {
	e.UserAnswerInt = answer
}
