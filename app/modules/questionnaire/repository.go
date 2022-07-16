package questionnaire

import (
	"context"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Repository struct {
	Mongo *mongo.Collection
}

func (r Repository) FetchById(id int) (Questionnaire, error) {
	var result Questionnaire

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	err := r.Mongo.FindOne(cxt, Questionnaire{ID: id}).Decode(&result)
	if err != nil {
		return result, err
	}

	return result, err
}

func (r Repository) FetchByName(name string) Questionnaire {
	var result Questionnaire

	return result
}

func (r Repository) Add(model Questionnaire) (primitive.ObjectID, error) {
	var err error
	var id primitive.ObjectID

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	result, err := r.Mongo.InsertOne(cxt, model)
	if err != nil {
		return [12]byte{}, err
	}

	result = result

	return id, err
}
