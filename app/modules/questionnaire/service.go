package questionnaire

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

type Service struct {
	Model   Questionnaire
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	repo := Repository{Mongo: *di.MongoDB}
	return &Service{
		Model:   Questionnaire{},
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}

func (s Service) DoAdd() error {
	var err error

	return err
}

func (s Service) GetById() error {
	var err error

	return err
}

func (s Service) GetByName() error {
	var err error

	return err
}
