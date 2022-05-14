package http

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

func Router(debug bool, di di.DI) *gin.Engine {
	router := gin.New()

	return router
}
