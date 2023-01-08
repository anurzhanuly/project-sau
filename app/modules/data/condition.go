package data

import "anurzhanuly/project-sau/app/modules/data/v1"

type Condition struct {
	Values         []string `bson:"value" json:"value"`
	Type           string   `bson:"type" json:"type"`
	Compare        string   `bson:"compare" json:"compare"`
	Multiple       bool     `bson:"multiple" json:"multiple"`
	TestCase       string   `bson:"testCase,omitempty" json:"testCase,omitempty"`
	IntValues      []int    `bson:"intValues,omitempty" json:"intValues,omitempty"`
	ExcludedValues []string `bson:"excludedValues,omitempty" json:"excludedValues,omitempty"`
}

func (c Condition) ConvertToV1() *v1.Condition {
	return &v1.Condition{
		Values:         c.Values,
		Type:           c.Type,
		Compare:        c.Compare,
		Multiple:       c.Multiple,
		QuestionName:   "",
		TestCase:       c.TestCase,
		IntValues:      c.IntValues,
		ExcludedValues: c.ExcludedValues,
	}
}

func (c Condition) IsMulti() bool {
	return c.Multiple
}

func (c Condition) GetCompareType() string {
	return c.Compare
}

func (c Condition) GetValues() []string {
	return c.Values
}

func (c Condition) GetType() string {
	return c.Type
}

func (c Condition) GetTestCase() string {
	return c.TestCase
}

func (c Condition) GetIntValues() []int {
	return c.IntValues
}

func (c Condition) GetExcludedValues() []string {
	return c.ExcludedValues
}
