package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/health"
	"github.com/gin-gonic/gin"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func HealthGetRecommendation(c *gin.Context, di *di.DI) {
	userAnswer := &answers.Result{}
	service := health.NewService(c, di)

	service.GetRecommendations(userAnswer)
}
