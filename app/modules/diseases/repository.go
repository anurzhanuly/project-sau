package diseases

import "go.mongodb.org/mongo-driver/mongo"

type Repository struct {
	Collection *mongo.Collection
}
