package v1

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

type Repository struct {
	collection *mongo.Collection
}

func (r Repository) add(model Disease) error {
	var err error

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)
	opts := options.Replace().SetUpsert(true)
	filter := bson.D{{"name", model.Name}}

	result, err := r.collection.ReplaceOne(cxt, filter, model, opts)
	if err != nil {
		return err
	}

	result = result

	return err
}
