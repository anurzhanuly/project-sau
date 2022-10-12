package answers

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type Service struct {
	Model   *User
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Answers.Name)
	repo := Repository{collection: collection}

	return &Service{
		Model:   &User{},
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}

func (s Service) SaveAnswers() bool {
	err := s.Context.BindJSON(s.Model)
	if err != nil {
		logrus.Info("Не удалось распарсить ответы пользователя")

		return false
	}

	_, err = s.Repo.Save(*s.Model)
	if err != nil {
		logrus.Info("Не удалось сохранить ответы пользователя")

		return false
	}

	return true
}
