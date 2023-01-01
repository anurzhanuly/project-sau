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
	Question       string   `bson:"questionName" json:"questionName"`
	TestCase       string   `bson:"testCase,omitempty" json:"testCase,omitempty"`
	IntValues      []int    `bson:"intValues,omitempty" json:"intValues,omitempty"`
	ExcludedValues []string `bson:"excludedValues,omitempty" json:"excludedValues,omitempty"`
}
