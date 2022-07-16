package questionnaire

import "go.mongodb.org/mongo-driver/mongo"

type Repository struct {
	Mongo mongo.Client
}

func (r Repository) FetchById(id int) Questionnaire {
	var result Questionnaire

	return result
}

func (r Repository) FetchByName(name string) Questionnaire {
	var result Questionnaire

	return result
}

func (r Repository) Add(model Questionnaire) error {
	var err error

	return err
}
