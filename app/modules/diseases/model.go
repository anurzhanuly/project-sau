package diseases

import (
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/comparator/factory"
	"anurzhanuly/project-sau/app/modules/data"
	"reflect"
	"strconv"
)

type Disease struct {
	ID              int                       `bson:"id" json:"id,omitempty"`
	Name            string                    `bson:"name" json:"name"`
	Tests           []string                  `bson:"tests" json:"tests"`
	Recommendations []string                  `bson:"recommendations" json:"recommendations"`
	Importance      string                    `bson:"importance" json:"importance"`
	Conditions      map[string]data.Condition `bson:"conditions" json:"conditions"`
}

type HardcodedDisease struct {
	ID         int                         `bson:"id" json:"id,omitempty"`
	Name       string                      `bson:"name" json:"name"`
	Tests      map[string][]string         `bson:"tests" json:"tests"`
	Conditions []map[string]data.Condition `bson:"conditions" json:"conditions"`
}

func (d Disease) meetsCriteria(answers *answers.User) bool {
	for key, condition := range d.Conditions {
		answer, keyExists := answers.Answers[key]

		if keyExists && isConditionMet(answer, condition) {
			continue
		}

		return false
	}

	return true
}

func isConditionMet(answer []string, conditions data.Condition) bool {
	userValue := answer[0]
	conditionValue := conditions.Values[0]

	if conditions.Compare == "optional" && conditions.Type == "text" {
		for _, value := range conditions.Values {
			for _, answer := range answer {
				if value == answer {
					return true
				}
			}
		}
	}

	if conditions.Compare == "greater" {
		userInput, err := strconv.Atoi(userValue)
		if err != nil {
			return false
		}

		condition, err := strconv.Atoi(conditionValue)
		if err != nil {
			return false
		}

		return userInput >= condition
	}

	if conditions.Compare == "less" {
		userInput, err := strconv.Atoi(userValue)
		if err != nil {
			return false
		}

		condition, err := strconv.Atoi(conditionValue)
		if err != nil {
			return false
		}

		return userInput < condition
	}

	if conditions.Multiple {
		return reflect.DeepEqual(answer, conditions)
	}

	return userValue == conditionValue
}

func (hd HardcodedDisease) getRecommendations(answers *answers.User) ([]string, bool) {
	for _, conditions := range hd.Conditions {
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
			return hd.Tests[testCase], true
		}
	}

	return []string{}, false
}
