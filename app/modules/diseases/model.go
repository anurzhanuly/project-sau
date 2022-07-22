package diseases

import (
	"anurzhanuly/project-sau/app/modules/answers"
	"reflect"
	"strconv"
)

type Disease struct {
	ID              int                   `bson:"id" json:"id,omitempty"`
	Name            string                `bson:"name" json:"name"`
	Tests           []string              `bson:"tests" json:"tests"`
	Recommendations []string              `bson:"recommendations" json:"recommendations"`
	Importance      string                `bson:"importance" json:"importance"`
	Conditions      map[string]Conditions `bson:"conditions" json:"conditions"`
}

type Conditions struct {
	Value    []string `bson:"value" json:"value"`
	Type     string   `bson:"type" json:"type"`
	Compare  string   `bson:"compare" json:"compare"`
	Multiple bool     `bson:"multiple" json:"multiple"`
}

type Recommendation struct {
	Name            string   `bson:"name" json:"name"`
	Tests           []string `bson:"tests" json:"tests"`
	Recommendations []string `bson:"recommendations" json:"recommendations"`
	Importance      string   `bson:"importance" json:"importance"`
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

func isConditionMet(answer []string, conditions Conditions) bool {
	if conditions.Multiple {
		return reflect.DeepEqual(answer, conditions)
	}

	userValue := answer[0]
	conditionValue := conditions.Value[0]

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

	return userValue == conditionValue
}
