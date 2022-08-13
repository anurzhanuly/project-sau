package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/notificator"
	"github.com/gin-gonic/gin"
)

func SendWhatsAppNotification(c *gin.Context, di *di.DI) {
	_ = notificator.NewService(c, di)
}
