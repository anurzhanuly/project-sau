package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"context"
	"github.com/gin-gonic/gin"
)

func Health(c *gin.Context, di *di.DI) {
	err := di.MongoDB.Ping(context.Background(), nil)
	if err != nil {
		c.JSON(200, gin.H{
			"message": err.Error(),
		})

		return
	}

	c.JSON(200, gin.H{
		"message": "PASHET MONGO",
	})
}
