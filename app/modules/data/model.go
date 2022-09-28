package data

type Condition struct {
	Value    []string `bson:"value" json:"value"`
	Type     string   `bson:"type" json:"type"`
	Compare  string   `bson:"compare" json:"compare"`
	Multiple bool     `bson:"multiple" json:"multiple"`
	TestCase string   `bson:"testCase,omitempty" json:"testCase,omitempty"`
}
