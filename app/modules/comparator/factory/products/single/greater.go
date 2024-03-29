package single

import (
	"anurzhanuly/project-sau/app/modules/data"
	"strconv"
)

type Greater struct {
	UserAnswer       []string
	DiseaseCondition data.ConditionInterface
	UserAnswerInt    []int
}

func (g *Greater) DoesMatch() bool {
	compareValue, err := strconv.Atoi(g.DiseaseCondition.GetValues()[0])
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

func (g *Greater) SetCondition(conditions data.ConditionInterface) {
	g.DiseaseCondition = conditions
}

func (g *Greater) SetCastedAnswer(answer []int) {
	g.UserAnswerInt = answer
}
