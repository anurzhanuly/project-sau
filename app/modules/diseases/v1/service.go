package v1

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/data"
	"encoding/json"
	"github.com/gin-gonic/gin"
	"io"
)

type Service struct {
	model      *Disease
	repository Repository
	Context    *gin.Context
	DI         *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Diseases.NameV1)
	repo := Repository{collection: collection}

	return &Service{
		model:      &Disease{},
		repository: repo,
		DI:         di,
		Context:    ctx,
	}
}

// AddDisease добавляет заболевание в монгу
func (s Service) AddDisease() error {
	var err error

	err = s.Context.BindJSON(s.model)
	if err != nil {
		return err
	}

	err = s.repository.add(*s.model)
	if err != nil {
		return err
	}

	return err
}

// GetRecommendations даёт рекомендации опираясь на ответы пользователя по заболеваниям
func (s Service) GetRecommendations(userAnswer *answers.User) ([]data.Recommendation, error) {
	var err error
	var result []data.Recommendation

	diseases, err := s.repository.getAll()
	if err != nil {
		return result, err
	}

	for _, disease := range diseases {
		if recommendations, ok := disease.getRecommendations(userAnswer); ok {
			result = append(result, data.Recommendation{
				Name:            disease.Name,
				Recommendations: recommendations,
			})
		}
	}

	return result, err
}

func (s Service) ExecuteDeletion() error {
	var err error

	err = s.Context.BindJSON(s.model)
	if err != nil {
		return err
	}

	err = s.repository.delete(*s.model)
	if err != nil {
		return err
	}

	return err
}

func (s Service) SaveAll() error {
	var diseases []Disease
	var err error
	body, err := io.ReadAll(s.Context.Request.Body)
	if err != nil {
		return err
	}

	err = json.Unmarshal(body, &diseases)
	if err != nil {
		return err
	}

	err = s.repository.saveAll(diseases)
	if err != nil {
		return err
	}

	return err
}
