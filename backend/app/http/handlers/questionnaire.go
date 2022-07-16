package handlers

import (
	"anurzhanuly/project-sau/backend/app/di"
	"anurzhanuly/project-sau/backend/app/modules/questionnaire"
	"github.com/gin-gonic/gin"
	"net/http"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func QuestionnaireByName(c *gin.Context, di *di.DI) {

}

func QuestionnaireById(c *gin.Context, di *di.DI) {

}

func QuestionnaireAdd(c *gin.Context, di *di.DI) {
	service := questionnaire.NewService(c, di)

	_, err := service.DoAdd()
	if err != nil {
		c.JSON(http.StatusInternalServerError, []byte("Не удалось инициализовароть сервис добавления опросника"))

		return
	}

	//c.JSON(http.StatusOK, []byte(`{"id":`+id+`}`))
}
