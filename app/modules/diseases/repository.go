package diseases

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Repository struct {
	collection *mongo.Collection
}

func (r Repository) getAllDiseases() ([]Disease, error) {
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

func (r Repository) addDisease(model Disease) error {
	var err error

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	result, err := r.collection.InsertOne(cxt, model)
	if err != nil {
		return err
	}

	result = result

	return err
}

func (r Repository) getAllHardcodedDiseases() []HardcodedDisease {
	return []HardcodedDisease{
		{
			ID:    2,
			Name:  "Рак груди",
			Tests: nil,
			Conditions: []map[string]Conditions{
				{
					"1": {
						Value:    []string{"Женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
					},
					"2": {
						Value:    []string{"50", "69"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
					},
					"10": {
						Value:    []string{"нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
					},
				},
				{
					"1": {
						Value:    []string{"Женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
					},
					"2": {
						Value:    []string{"40", "49"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
					},
					"10": {
						Value:    []string{"нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
					},
					"18": {
						Value:    []string{"рак груди"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
					},
				},
			},
		},
	}
}
