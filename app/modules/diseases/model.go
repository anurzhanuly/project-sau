package diseases

import (
	"anurzhanuly/project-sau/app/modules/answers"
	"reflect"
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

func (d Disease) meetsCriteria(answers *answers.Result) bool {
	for key, userAnswer := range answers.Answers {
		conditionValue, exists := d.Conditions[key]

		if exists {
			if compare(userAnswer, conditionValue) {
				continue
			}
		}

		return false
	}

	return true
}

func compare(answer []string, conditions Conditions) bool {
	return reflect.DeepEqual(answer, conditions.Value)
}
