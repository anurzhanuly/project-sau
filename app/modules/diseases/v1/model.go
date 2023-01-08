package v1

import (
	"anurzhanuly/project-sau/app/modules/data/v1"
)

type Disease struct {
	ID         int                 `bson:"id" json:"id,omitempty"`
	Name       string              `bson:"name" json:"name"`
	Tests      map[string][]string `bson:"tests" json:"tests,omitempty"`
	Conditions [][]v1.Condition    `bson:"conditions" json:"conditions,omitempty"`
}
