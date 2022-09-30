package single

import (
	"anurzhanuly/project-sau/app/modules/data"
	"strconv"
)

type Range struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
	UserAnswerInt    []int
}

func (r Range) DoesMatch() bool {
	compareValue, err := strconv.Atoi(r.DiseaseCondition.Values[0])
	if err != nil {

	}

	compareValue2, err := strconv.Atoi(r.DiseaseCondition.Values[1])
	if err != nil {

	}

	answer, err := strconv.Atoi(r.UserAnswer[0])
	if err != nil {

	}

	return (compareValue <= answer) && (answer <= compareValue2)
}

func (r *Range) SetUserAnswer(answer []string) {
	r.UserAnswer = answer
}

func (r *Range) SetCondition(conditions data.Condition) {
	r.DiseaseCondition = conditions
}

func (r *Range) SetCastedAnswer(answer []int) {
	r.UserAnswerInt = answer
}
