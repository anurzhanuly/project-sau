package single

import (
	"anurzhanuly/project-sau/app/modules/data"
	"strconv"
)

type Less struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
	UserAnswerInt    []int
}

func (l Less) DoesMatch() bool {
	compareValue, err := strconv.Atoi(l.DiseaseCondition.Values[0])
	if err != nil {

	}

	userAnswer, err := strconv.Atoi(l.UserAnswer[0])
	if err != nil {

	}

	return userAnswer <= compareValue
}

func (l *Less) SetUserAnswer(answer []string) {
	l.UserAnswer = answer
}

func (l *Less) SetCondition(conditions data.Condition) {
	l.DiseaseCondition = conditions
}

func (l *Less) SetCastedAnswer(answer []int) {
	l.UserAnswerInt = answer
}
