package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/handlers"
	"anurzhanuly/project-sau/app/http/middleware"
	"github.com/gin-gonic/gin"
	"net/http"
)

const (
	EntryPointRoute    = "./frontend/public/index.html"
	EntryPointFilename = "index.html"
)

func Router(debug bool, di di.DI) *gin.Engine {
	router := gin.New()

	ConfigureRoutes(router, di)

	return router
}

func ConfigureRoutes(router *gin.Engine, di di.DI) {
	router.LoadHTMLGlob(EntryPointRoute)
	router.GET("/", func(context *gin.Context) {
		context.HTML(http.StatusOK, EntryPointFilename, gin.H{
			"title": "AMAN SAU BOL KZ",
		})
	})

	router.GET("/hello", middleware.ProvideDependency(handlers.Hello, di))
	router.GET("/health", middleware.ProvideDependency(handlers.Health, di))
}
