package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/frontend"
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
	router.GET("/_health", middleware.ProvideDependency(frontend.Health, di))
	router.POST("/diseases/recommendations", middleware.ProvideDependency(frontend.HealthGetRecommendation, di))
	router.POST("/diseases/add", middleware.ProvideDependency(frontend.AddDisease, di))
	router.POST("/diseases/delete", middleware.ProvideDependency(frontend.DeleteDisease, di))
	router.GET("/recommendations", middleware.ProvideDependency(frontend.GetAllRecommendations, di))
	router.GET("/userAnswers", middleware.ProvideDependency(frontend.GetAllUsersStatistics, di))
	router.GET("/questionnaires/:name", middleware.ProvideDependency(frontend.QuestionnaireByName, di))
	router.GET("/questionnaires/id/:id", middleware.ProvideDependency(frontend.QuestionnaireById, di))
	router.POST("/questionnaires/add", middleware.ProvideDependency(frontend.QuestionnaireAdd, di))
	router.PUT("/questionnaires/update", middleware.ProvideDependency(frontend.QuestionnaireUpdate, di))
	router.POST("/notify", middleware.ProvideDependency(frontend.SendNotification, di))
}
