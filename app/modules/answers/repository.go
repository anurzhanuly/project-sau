package answers

import (
	"context"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Repository struct {
	collection *mongo.Collection
}

func (r Repository) Save(userResult UserResult) (primitive.ObjectID, error) {
	var err error
	var id primitive.ObjectID

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	_, err = r.collection.InsertOne(cxt, userResult)
	if err != nil {
		return [12]byte{}, err
	}

	return id, err
}
