package frontend

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/diseases"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"net/http"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func GetRecommendationsForSurvey(c *gin.Context, di *di.DI) {
	userAnswer := &answers.User{}
	service := diseases.NewService(c, di)
	answerService := answers.NewService(c, di)
	err := c.BindJSON(userAnswer)
	if err != nil {
		logrus.Info("Не удалось распарсить ответы пользователя")

		c.JSON(
			http.StatusInternalServerError,
			fmt.Sprintf("Произошла ошибка во время получения ответов пользователя: %s", err.Error()),
		)

		return
	}

	recommendations, err := service.GetRecommendations(userAnswer)
	if err != nil {
		c.JSON(
			http.StatusInternalServerError,
			fmt.Sprintf("Произошла ошибка во время получения рекомендации по заболеваниям: %s", err.Error()),
		)

		logrus.WithField(
			"Ошибка при получении рекомендации",
			logrus.Fields{"userAnswer": userAnswer},
		).Fatal("Произошла ошибка во время получения рекомендации по заболеваниям")

		return
	}

	if err = answerService.SaveAnswers(userAnswer, recommendations); err != nil {
		logrus.WithField(
			"Ошибка при сохранении ответов пользователя",
			logrus.Fields{"userAnswer": userAnswer},
		)

		c.JSON(
			http.StatusInternalServerError,
			fmt.Sprintf("Произошла ошибка во сохранения результатов: %s", err.Error()),
		)

		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":          http.StatusOK,
		"recommendations": recommendations,
	})
}

func GetAllUsersStatistics(c *gin.Context, di *di.DI) {
	var err error
	service := answers.NewService(c, di)

	result, err := service.GetAnswers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "произошла ошибка во время получения статистика пользователя",
			"error":   err.Error(),
			"result":  result,
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": result,
	})
}
