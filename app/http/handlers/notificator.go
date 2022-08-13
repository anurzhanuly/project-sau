package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/notificator"
	"github.com/gin-gonic/gin"
)

func SendWhatsAppNotification(c *gin.Context, di *di.DI) {
	service := notificator.NewService(c, di)
	service.Execute()
}
