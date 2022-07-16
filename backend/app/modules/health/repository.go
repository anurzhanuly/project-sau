package health

import "go.mongodb.org/mongo-driver/mongo"

type Repository struct {
	collection *mongo.Collection
}

func (r Repository) getDiseases() []Disease {
	var result []Disease

	return result
}
