package diseases

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"encoding/json"
	"github.com/gin-gonic/gin"
)

type Service struct {
	model      *Disease
	repository Repository
	Context    *gin.Context
	DI         *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	collection := di.MongoDB.Database(di.Config.MongoDatabaseName).Collection(di.Config.Collections.Diseases.Name)
	repo := Repository{collection: collection}

	return &Service{
		model:      &Disease{},
		repository: repo,
		DI:         di,
		Context:    ctx,
	}
}

//GetRecommendations даёт рекомендации опираясь на ответы пользователя по заболеваниям
func (s Service) GetRecommendations(userAnswer *answers.Result) ([]Recommendation, error) {
	var err error
	var recommendations []Recommendation

	err = s.Context.BindJSON(userAnswer)
	if err != nil {
		return recommendations, err
	}

	diseases, err := s.repository.getAllDiseases()
	if err != nil {
		return recommendations, err
	}

	for _, disease := range diseases {
		if disease.meetsCriteria(userAnswer) {
			recommendation := Recommendation{
				Name:            disease.Name,
				Recommendations: disease.Recommendations,
				Tests:           disease.Tests,
				Importance:      disease.Importance,
			}

			recommendations = append(recommendations, recommendation)
		}
	}

	return recommendations, err
}

// AddDisease добавляет заболевание в монгу
func (s Service) AddDisease() error {
	var err error

	err = s.Context.BindJSON(s.model)
	if err != nil {
		return err
	}

	err = s.repository.addDisease(*s.model)
	if err != nil {
		return err
	}

	return err
}

func (s Service) GetAllDiseases() (string, error) {
	var result []byte
	var err error

	diseases, err := s.repository.getAllDiseases()
	if err != nil {
		return "", err
	}

	result, err = json.Marshal(diseases)

	return string(result), err
}