package frontend

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/services/notification/notificator"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

const mediumKey = "medium"

func SendNotification(c *gin.Context, di *di.DI) {
	notificationContent := &notificator.Content{}
	service := notificator.NewService(c, di)

	err := c.BindJSON(notificationContent)
	if err != nil {
		c.JSONP(http.StatusInternalServerError, gin.H{
			"message": "Ошибка при мапинге структуры",
		})

		return
	}

	medium := notificator.Get(*notificationContent)
	if medium == nil {
		c.JSONP(http.StatusBadRequest, gin.H{
			"message": fmt.Sprintf("Не передан способ уведомления пользователя, параметр - %s", mediumKey),
		})

		return
	}

	service.Execute(medium)
}
