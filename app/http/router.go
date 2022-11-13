package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/handlers"
	"anurzhanuly/project-sau/app/http/middleware"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	cors "github.com/itsjamie/gin-cors"
	"time"
)

func Router(debug bool, di di.DI) *gin.Engine {
	router := gin.New()

	ConfigureRoutes(router, di)

	return router
}

func ConfigureRoutes(router *gin.Engine, di di.DI) {
	router.Use(cors.Middleware(cors.Config{
		Origins:         "*",
		Methods:         "GET, PUT, POST, DELETE",
		RequestHeaders:  "Origin, Authorization, Content-Type",
		ExposedHeaders:  "",
		MaxAge:          50 * time.Second,
		Credentials:     false,
		ValidateHeaders: false,
	}))

	router.Use(static.Serve("/", static.LocalFile(di.Config.StaticPath, false)))
	router.GET("/_health", middleware.ProvideDependency(handlers.Health, di))
	router.POST("/diseases/recommendations", middleware.ProvideDependency(handlers.HealthGetRecommendation, di))
	router.POST("/diseases", middleware.ProvideDependency(handlers.AddDisease, di))
	router.POST("/diseases/delete", middleware.ProvideDependency(handlers.DeleteDisease, di))
	router.GET("/recommendations", middleware.ProvideDependency(handlers.GetAllRecommendations, di))
	router.GET("/userAnswers", middleware.ProvideDependency(handlers.GetAllUsersStatistics, di))
	router.GET("/questionnaires/:name", middleware.ProvideDependency(handlers.QuestionnaireByName, di))
	router.GET("/questionnaires/id/:id", middleware.ProvideDependency(handlers.QuestionnaireById, di))
	router.POST("/questionnaires/add", middleware.ProvideDependency(handlers.QuestionnaireAdd, di))
	router.PUT("/questionnaires/update", middleware.ProvideDependency(handlers.QuestionnaireUpdate, di))
	router.POST("/notify", middleware.ProvideDependency(handlers.SendNotification, di))
}
