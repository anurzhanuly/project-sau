package http

import (
	"anurzhanuly/project-sau/app/di"
	handlers2 "anurzhanuly/project-sau/app/http/handlers"
	"anurzhanuly/project-sau/app/http/middleware"
	"github.com/gin-gonic/gin"
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
	//router.LoadHTMLGlob(EntryPointRoute)
	//router.GET("/", func(context *gin.Context) {
	//	context.HTML(http.StatusOK, EntryPointFilename, gin.H{
	//		"title": "AMAN SAU BOL KZ",
	//	})
	//})

	router.GET("/_health", middleware.ProvideDependency(handlers2.Health, di))
	router.POST("/diseases/recommendations", middleware.ProvideDependency(handlers2.HealthGetRecommendation, di))
	router.POST("/diseases/add", middleware.ProvideDependency(handlers2.AddDisease, di))
	router.GET("/questionnaires/:name", middleware.ProvideDependency(handlers2.QuestionnaireByName, di))
	router.GET("/questionnaires/id/:id", middleware.ProvideDependency(handlers2.QuestionnaireById, di))
	router.POST("/questionnaires/add", middleware.ProvideDependency(handlers2.QuestionnaireAdd, di))
}
