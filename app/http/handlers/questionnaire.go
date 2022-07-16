package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/questionnaire"
	"github.com/gin-gonic/gin"
	"net/http"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func ByName(c *gin.Context, di *di.DI) {

}

func ById(c *gin.Context, di *di.DI) {

}

func Add(c *gin.Context, di *di.DI) {
	service := questionnaire.NewService(c, di)

	_, err := service.DoAdd()
	if err != nil {
		c.JSON(http.StatusInternalServerError, []byte("Не удалось инициализовароть сервис добавления опросника"))

		return
	}

	//c.JSON(http.StatusOK, []byte(`{"id":`+id+`}`))
}
