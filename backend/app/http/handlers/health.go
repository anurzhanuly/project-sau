package handlers

import (
	"anurzhanuly/project-sau/backend/app/di"
	"anurzhanuly/project-sau/backend/app/modules/answers"
	"anurzhanuly/project-sau/backend/app/modules/diseases"
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
