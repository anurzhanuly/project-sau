package data

type Condition struct {
	Values         []string `bson:"value" json:"value"`
	Type           string   `bson:"type" json:"type"`
	Compare        string   `bson:"compare" json:"compare"`
	Multiple       bool     `bson:"multiple" json:"multiple"`
	TestCase       string   `bson:"testCase,omitempty" json:"testCase,omitempty"`
	IntValues      []int    `bson:"intValues,omitempty" json:"intValues,omitempty"`
	ExcludedValues []string `bson:"excludedValues,omitempty" json:"excludedValues,omitempty"`
}

type ConditionV1 struct {
	Values         []string `bson:"value" json:"value"`
	Type           string   `bson:"type" json:"type"`
	Compare        string   `bson:"compare" json:"compare"`
	Multiple       bool     `bson:"multiple" json:"multiple"`
	QuestionName   string   `bson:"questionName" json:"questionName"`
	TestCase       string   `bson:"testCase,omitempty" json:"testCase,omitempty"`
	IntValues      []int    `bson:"intValues,omitempty" json:"intValues,omitempty"`
	ExcludedValues []string `bson:"excludedValues,omitempty" json:"excludedValues,omitempty"`
}

func (c Condition) ConvertToV1() *ConditionV1 {
	return &ConditionV1{
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
