package diseases

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/data"
	v12 "anurzhanuly/project-sau/app/modules/data/v1"
	v1 "anurzhanuly/project-sau/app/modules/diseases/v1"
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

func (s Service) FetchAllRecommendations() (string, error) {
	var result []byte
	var err error

	recommendations, err := s.repository.getAll()
	if err != nil {
		return "", err
	}

	result, err = json.Marshal(recommendations)

	return string(result), err
}

func (s Service) FetchAllRecommendationsV1() (string, error) {
	var result []byte
	var err error
	var allDiseases []v1.Disease

	recommendations, err := s.repository.getAll()
	if err != nil {
		return "", err
	}

	for _, disease := range recommendations {
		diseaseV1 := disease.ConvertToV1()
		var allConditionsV1 [][]v12.Condition

		for _, conditions := range disease.Conditions {
			var conditionsV1 []v12.Condition

			for questionName, condition := range conditions {
				conditionV1 := condition.ConvertToV1()
				conditionV1.QuestionName = questionName

				conditionsV1 = append(conditionsV1, *conditionV1)
			}

			allConditionsV1 = append(allConditionsV1, conditionsV1)
		}

		diseaseV1.Conditions = allConditionsV1
		allDiseases = append(allDiseases, *diseaseV1)
	}

	result, err = json.Marshal(allDiseases)

	return string(result), err
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
