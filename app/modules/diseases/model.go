package diseases

type Disease struct {
	ID              int           `bson:"id" json:"id,omitempty"`
	Name            string        `bson:"name" json:"name,omitempty"`
	Recommendations string        `bson:"recommendations" json:"recommendations,omitempty"`
	Conditions      []interface{} `bson:"conditions" json:"conditions,omitempty"`
}
