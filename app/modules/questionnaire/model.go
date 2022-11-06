package questionnaire

import "encoding/json"

type Questionnaire struct {
	ID      string          `bson:"id" json:"id"`
	Name    string          `bson:"name" json:"name,omitempty"`
	Content json.RawMessage `bson:"content" json:"content"`
}
