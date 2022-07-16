package health

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

type Service struct {
	Model   *Disease
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Questionnaire.Name)
	repo := Repository{Collection: collection}

	return &Service{
		Model:   &Disease{},
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}
