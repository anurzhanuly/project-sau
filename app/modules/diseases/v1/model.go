package v1

import "anurzhanuly/project-sau/app/modules/data"

type Disease struct {
	ID         int                  `bson:"id" json:"id,omitempty"`
	Name       string               `bson:"name" json:"name"`
	Tests      map[string][]string  `bson:"tests" json:"tests,omitempty"`
	Conditions [][]data.ConditionV1 `bson:"conditions" json:"conditions,omitempty"`
}
