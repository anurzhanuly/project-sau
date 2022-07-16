package diseases

import (
	"anurzhanuly/project-sau/backend/app/modules/answers"
)

type Disease struct {
	ID              int           `bson:"id" json:"id,omitempty"`
	Name            string        `bson:"name" json:"name,omitempty"`
	Recommendations string        `bson:"recommendations" json:"recommendations,omitempty"`
	Conditions      []interface{} `bson:"conditions" json:"conditions,omitempty"`
}

func (d Disease) meetsCriteria(answers *answers.Result) bool {
	var result bool

	return result
}
