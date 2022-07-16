package questionnaire

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"strconv"
)

type Service struct {
	Model   *Questionnaire
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Questionnaire.Name)
	repo := Repository{Mongo: collection}

	return &Service{
		Model:   &Questionnaire{},
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}

func (s Service) DoAdd() (primitive.ObjectID, error) {
	var err error
	var id primitive.ObjectID

	err = s.Context.BindJSON(s.Model)
	if err != nil {
		return [12]byte{}, err
	}

	id, err = s.Repo.Add(*s.Model)
	if err != nil {
		return [12]byte{}, err
	}

	return id, err
}

func (s Service) GetById() (Questionnaire, error) {
	var err error
	var result Questionnaire

	id, err := strconv.Atoi(s.Context.Param("id"))
	if err != nil {
		return result, err
	}

	result, err = s.Repo.FetchById(id)
	if err != nil {
		return result, err
	}

	return result, err
}

func (s Service) GetByName() error {
	var err error

	return err
}
