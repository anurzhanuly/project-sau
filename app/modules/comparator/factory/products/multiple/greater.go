package multiple

import (
	"anurzhanuly/project-sau/app/modules/data"
	"strconv"
)

type Greater struct {
	UserAnswer       []string
	DiseaseCondition data.Condition
}

func (g Greater) DoesMatch() bool {
	compareValue, err := strconv.Atoi(g.DiseaseCondition.Value[0])
	if err != nil {

	}

	userAnswer, err := strconv.Atoi(g.UserAnswer[0])
	if err != nil {

	}

	return userAnswer >= compareValue
}

func (g *Greater) SetUserAnswer(answer []string) {
	g.UserAnswer = answer
}

func (g *Greater) SetCondition(conditions data.Condition) {
	g.DiseaseCondition = conditions
}
