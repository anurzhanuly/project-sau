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
	filter := bson.D{{"_id", model.ID}}

	result, err := r.collection.ReplaceOne(cxt, filter, model, opts)
	if err != nil {
		return err
	}

	result = result

	return err
}

func (r Repository) getAll() ([]Disease, error) {
	var diseases []Disease
	var err error

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := r.collection.Find(ctx, bson.M{})
	if err != nil {
		return diseases, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var disease Disease

		err := cursor.Decode(&disease)
		if err != nil {
			return diseases, err
		}

		diseases = append(diseases, disease)
	}

	return diseases, err
}

func (r Repository) delete(model Disease) error {
	var err error

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)
	filter := bson.D{{"_id", model.Name}}

	result, err := r.collection.DeleteOne(cxt, filter)
	if err != nil {
		return err
	}

	result = result

	return err
}

func (r Repository) saveAll(diseases []Disease) error {
	var err error

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	for _, disease := range diseases {
		filter := bson.D{{"_id", disease.ID}}

		_, err := r.collection.ReplaceOne(cxt, filter, disease)
		if err != nil {
			return err
		}
	}

	return err
}
