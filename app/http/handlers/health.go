package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/diseases"
	"github.com/gin-gonic/gin"
	"github.com/sirupsen/logrus"
	"net/http"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func HealthGetRecommendation(c *gin.Context, di *di.DI) {
	userAnswer := &answers.Result{}
	service := diseases.NewService(c, di)

	recommendations, err := service.GetRecommendations(userAnswer)
	if err != nil {
		c.JSON(
			http.StatusInternalServerError,
			"Произошла ошибка во время получения рекомендации по заболеваниям",
		)

		logrus.WithField(
			"Ошибка при получении рекомендации",
			logrus.Fields{"userAnswer": userAnswer},
		).Fatal("Произошла ошибка во время получения рекомендации по заболеваниям")

		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":          http.StatusOK,
		"recommendations": recommendations,
	})
}

func AddDisease(c *gin.Context, di *di.DI) {
	service := diseases.NewService(c, di)

	err := service.AddDisease()
	if err != nil {
		return
	}
}

func GetAllDiseases(c *gin.Context, di *di.DI) {
	var result string
	var err error
	service := diseases.NewService(c, di)

	result, err = service.GetAllDiseases()
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": result,
	})
}
