package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/services/notification/notificator"
	"github.com/gin-gonic/gin"
)

func SendWhatsAppNotification(c *gin.Context, di *di.DI) {
	_ = notificator.NewService(c, di)
	//service.Execute()
}
