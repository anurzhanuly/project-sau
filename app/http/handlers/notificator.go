package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/services/notification/notificator"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

const mediumKey = "medium"

func SendNotification(c *gin.Context, di *di.DI) {
	service := notificator.NewService(c, di)
	medium := notificator.Get(c.Param(mediumKey))
	if medium == nil {
		c.JSON(http.StatusBadRequest, []byte(
			fmt.Sprintf("Не передан способ уведомления пользователя, параметр - %s", mediumKey)),
		)
	}

	service.Execute(medium)
}
