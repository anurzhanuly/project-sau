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

	router.GET("/_health", middleware.ProvideDependency(handlers.Health, di))
	router.GET("/health/recommendations", middleware.ProvideDependency(handlers.HealthGetRecommendation, di))
	router.GET("/questionnaires/:name", middleware.ProvideDependency(handlers.QuestionnaireByName, di))
	router.GET("/questionnaires/id/:id", middleware.ProvideDependency(handlers.QuestionnaireById, di))
	router.POST("/questionnaires/add", middleware.ProvideDependency(handlers.QuestionnaireAdd, di))
}
