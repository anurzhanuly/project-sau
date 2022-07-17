package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/diseases"
	"github.com/gin-gonic/gin"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func HealthGetRecommendation(c *gin.Context, di *di.DI) {
	userAnswer := &answers.Result{}
	service := diseases.NewService(c, di)

	_, err := service.GetRecommendations(userAnswer)
	if err != nil {
		return
	}
}

func AddDisease(c *gin.Context, di *di.DI) {
	service := diseases.NewService(c, di)

	service.AddDisease()
}
