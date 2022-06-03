package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

func Hello(c *gin.Context, di *di.DI) {
	c.JSON(200, gin.H{
		"message": "Hello World",
	})
}
