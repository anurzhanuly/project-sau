package handlers

import (
	"anurzhanuly/project-sau/backend/app/di"
	"anurzhanuly/project-sau/backend/app/modules/answers"
	"anurzhanuly/project-sau/backend/app/modules/health"
	"github.com/gin-gonic/gin"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func HealthGetRecommendation(c *gin.Context, di *di.DI) {
	userAnswer := &answers.Result{}
	service := health.NewService(c, di)

	service.GetRecommendations(userAnswer)
}
