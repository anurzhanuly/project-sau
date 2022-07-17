package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/handlers"
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
	router.GET("/_health", middleware.ProvideDependency(handlers.Health, di))
	router.POST("/diseases/recommendations", middleware.ProvideDependency(handlers.HealthGetRecommendation, di))
	router.POST("/diseases/add", middleware.ProvideDependency(handlers.AddDisease, di))
	router.GET("/diseases", middleware.ProvideDependency(handlers.GetAllDiseases, di))
	router.GET("/questionnaires/:name", middleware.ProvideDependency(handlers.QuestionnaireByName, di))
	router.GET("/questionnaires/id/:id", middleware.ProvideDependency(handlers.QuestionnaireById, di))
	router.POST("/questionnaires/add", middleware.ProvideDependency(handlers.QuestionnaireAdd, di))
}
