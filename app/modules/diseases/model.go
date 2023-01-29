package diseases

import (
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/comparator/factory"
	"anurzhanuly/project-sau/app/modules/data"
	v1 "anurzhanuly/project-sau/app/modules/diseases/v1"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"strconv"
)

type Disease struct {
	ID         int                         `bson:"id" json:"id,omitempty"`
	MongoID    primitive.ObjectID          `bson:"_id"`
	Name       string                      `bson:"name" json:"name"`
	Tests      map[string][]string         `bson:"tests" json:"tests,omitempty"`
	Conditions []map[string]data.Condition `bson:"conditions" json:"conditions,omitempty"`
}

func (d Disease) getRecommendations(answers *answers.User) ([]string, bool) {
	for _, conditions := range d.Conditions {
		conditionApplies := true
		var testCase string

		for key, condition := range conditions {
			var castedAnswer []int
			testCase = condition.TestCase
			comparator := factory.GetAnswersComparator(condition)
			answer, keyExists := answers.Answers[key]

			if !keyExists {
				conditionApplies = false
				break
			}

			comparator.SetUserAnswer(answer)
			comparator.SetCondition(condition)

			if condition.Type == "number" {
				for _, val := range answer {
					tmp, _ := strconv.Atoi(val)
					castedAnswer = append(castedAnswer, tmp)
				}

				castedAnswer = []int{}

				for _, val := range condition.Values {
					tmp, _ := strconv.Atoi(val)
					castedAnswer = append(castedAnswer, tmp)
				}

				condition.IntValues = castedAnswer
			}

			comparator.SetCastedAnswer(castedAnswer)

			if !comparator.DoesMatch() {
				conditionApplies = false
				break
			}
		}

		if conditionApplies {
			return d.Tests[testCase], true
		}
	}

	return []string{}, false
}

func (d Disease) ConvertToV1() *v1.Disease {
	return &v1.Disease{
		ID:         d.MongoID,
		Name:       d.Name,
		Tests:      d.Tests,
		Conditions: nil,
	}
}
