package questionnaire

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

type Service struct {
	Model Questionnaire
}

func (s Service) DoAdd(c *gin.Context, di *di.DI) error {
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
