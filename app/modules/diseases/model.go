package diseases

import (
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/comparator/factory"
	"anurzhanuly/project-sau/app/modules/data"
	"fmt"
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

func (d Disease) meetsCriteria(answers *answers.Result) bool {
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
	conditionValue := conditions.Value[0]

	if conditions.Compare == "optional" && conditions.Type == "text" {
		for _, value := range conditions.Value {
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

func (hd HardcodedDisease) meetsHardcodedCriteria(answers *answers.Result) bool {
	for _, conditions := range hd.Conditions {
		for key, condition := range conditions {
			comparator := factory.GetAnswersComparator(condition)
			answer, keyExists := answers.Answers[key]
			comparator.SetUserAnswer(answer)
			comparator.SetCondition(condition)

			if keyExists && comparator.DoesMatch() {
				fmt.Println("KRASAVA")
			}
		}

		return false
	}

	return true
}
