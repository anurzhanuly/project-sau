package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/answers"
	"anurzhanuly/project-sau/app/modules/diseases"
	"github.com/gin-gonic/gin"
	"net/http"
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

	c.JSON(http.StatusOK, []byte(result))
}
