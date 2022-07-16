package health

import (
	"anurzhanuly/project-sau/backend/app/di"
	"anurzhanuly/project-sau/backend/app/modules/answers"
	"github.com/gin-gonic/gin"
)

type Service struct {
	Model   *Disease
	Repo    Repository
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Diseases.Name)
	repo := Repository{collection: collection}

	return &Service{
		Model:   &Disease{},
		Repo:    repo,
		DI:      di,
		Context: ctx,
	}
}

func (s Service) GetRecommendations(result *answers.Result) ([]string, error) {
	var err error
	recommendations := make([]string, 5)

	err = s.Context.BindJSON(result)
	if err != nil {
		return nil, err
	}

	diseases := s.Repo.getDiseases()

	for _, disease := range diseases {
		if disease.meetsCriteria(result) {
			recommendations = append(recommendations, disease.Recommendations)
		}
	}

	return recommendations, err
}
