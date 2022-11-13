package answers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/data"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
)

type Service struct {
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Answers.Name)
	repo := Repository{collection: collection}

	return &Service{
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}

func (s Service) SaveAnswers(userAnswers *User, recommendation []data.Recommendation) error {
	userResult := UserResult{
		Answers:         *userAnswers,
		Recommendations: recommendation,
	}

	_, err := s.Repo.Save(userResult)
	if err != nil {
		logrus.Info("Не удалось сохранить ответы пользователя")

		return err
	}

	return err
}
