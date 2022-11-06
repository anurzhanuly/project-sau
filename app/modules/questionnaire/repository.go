package questionnaire

import (
	"context"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Repository struct {
	collection *mongo.Collection
}

func (r Repository) FetchById(id string) (Questionnaire, error) {
	var result Questionnaire

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	err := r.collection.FindOne(cxt, bson.M{"id": id}).Decode(&result)
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

	result, err := r.collection.InsertOne(cxt, model)
	if err != nil {
		return [12]byte{}, err
	}

	result = result

	return id, err
}

func (r Repository) Update(model Questionnaire) (primitive.ObjectID, error) {
	var err error
	var id primitive.ObjectID

	filter := bson.D{{"id", model.ID}}
	update := bson.D{{"$set", bson.D{{"content", model.Content}}}}

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	result, err := r.collection.UpdateOne(cxt, filter, update)
	if result.MatchedCount == 0 {
		err = errors.New("не найден документ для добавления")

		return [12]byte{}, err
	}

	return id, err
}
