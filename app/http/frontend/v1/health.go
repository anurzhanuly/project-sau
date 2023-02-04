package v1

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	v1 "anurzhanuly/project-sau/app/modules/diseases/v1"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"net/http"
)

func GetRecommendationsForSurvey(c *gin.Context, di *di.DI) {
	userAnswer := &answers.User{}
	service := v1.NewService(c, di)
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
