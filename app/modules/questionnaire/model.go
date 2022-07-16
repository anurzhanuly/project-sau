package questionnaire

import "encoding/json"

type Questionnaire struct {
	ID      int             `bson:"id" json:"id,omitempty"`
	Name    string          `bson:"name" json:"name"`
	Content json.RawMessage `bson:"content" json:"content"`
}
