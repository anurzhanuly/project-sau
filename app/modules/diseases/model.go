package diseases

import (
	"anurzhanuly/project-sau/app/modules/answers"
)

type Disease struct {
	ID              int                   `bson:"id" json:"id,omitempty"`
	Name            string                `bson:"name" json:"name,omitempty"`
	Recommendations string                `bson:"recommendations" json:"recommendations,omitempty"`
	Conditions      map[string]Conditions `bson:"conditions" json:"conditions"`
}

type Conditions struct {
	Value    []string `bson:"value" json:"value"`
	Type     string   `bson:"type" json:"type"`
	Compare  string   `bson:"compare" json:"compare"`
	Multiple bool     `bson:"multiple" json:"multiple"`
}

func (d Disease) meetsCriteria(answers *answers.Result) bool {
	var result bool

	return result
}
