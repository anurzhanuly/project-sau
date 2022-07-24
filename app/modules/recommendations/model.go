package recommendations

type Recommendation struct {
	Name            string   `bson:"name" json:"name"`
	Tests           []string `bson:"tests" json:"tests"`
	Recommendations []string `bson:"recommendations" json:"recommendations"`
	Importance      string   `bson:"importance" json:"importance"`
}
