package frontend

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/questionnaire"
	"github.com/gin-gonic/gin"
	"net/http"
)

//TODO: Надо бы вынести инициализацию сервиса модулей в middleware

func QuestionnaireByName(c *gin.Context, di *di.DI) {

}

func QuestionnaireById(c *gin.Context, di *di.DI) {
	service := questionnaire.NewService(c, di)

	result, err := service.GetById()
	if err != nil {
		c.JSON(http.StatusInternalServerError, []byte("Не удалось инициализовароть сервис добавления опросника"))

		return
	}

	c.JSON(http.StatusOK, result)
}

func QuestionnaireAdd(c *gin.Context, di *di.DI) {
	service := questionnaire.NewService(c, di)

	_, err := service.DoAdd()
	if err != nil {
		c.JSON(http.StatusInternalServerError, []byte(err.Error()))

		return
	}

	c.JSON(http.StatusOK, []byte("All saved, AlhamdulilLah! :D"))
}

func QuestionnaireUpdate(c *gin.Context, di *di.DI) {
	service := questionnaire.NewService(c, di)

	_, err := service.DoUpdate()
	if err != nil {
		c.JSON(http.StatusInternalServerError, []byte(err.Error()))

		return
	}

	c.JSON(http.StatusOK, []byte("All saved, AlhamdulilLah! :D"))
}
