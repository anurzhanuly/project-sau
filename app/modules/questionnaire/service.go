package questionnaire

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Service struct {
	Model   Questionnaire
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Questionnaire.Name)
	repo := Repository{Mongo: collection}

	return &Service{
		Model:   Questionnaire{},
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}

func (s Service) DoAdd() (primitive.ObjectID, error) {
	var err error
	var id primitive.ObjectID

	return id, err
}

func (s Service) GetById() error {
	var err error

	return err
}

func (s Service) GetByName() error {
	var err error

	return err
}
