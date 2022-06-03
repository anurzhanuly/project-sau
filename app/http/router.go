package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/handlers"
	"anurzhanuly/project-sau/app/http/middleware"
	"github.com/gin-gonic/gin"
)

func Router(debug bool, di di.DI) *gin.Engine {
	router := gin.New()

	ConfigureRoutes(router, di)

	return router
}

func ConfigureRoutes(router gin.IRouter, di di.DI) {
	router.GET("/hello", middleware.ProvideDependency(handlers.Hello, di))
}
