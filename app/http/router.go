package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/backend"
	"anurzhanuly/project-sau/app/http/backend/v1"
	"anurzhanuly/project-sau/app/http/frontend"
	frontendV1 "anurzhanuly/project-sau/app/http/frontend/v1"
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

	// Frontend сам сайт
	website := router.Group("")
	{
		website.GET("/_health", middleware.ProvideDependency(frontend.Health, di))
		website.POST("/diseases/recommendations", middleware.ProvideDependency(frontend.GetRecommendationsForSurvey, di))
		website.POST("/v1/diseases/recommendations", middleware.ProvideDependency(frontendV1.GetRecommendationsForSurvey, di))
		website.GET("/userAnswers", middleware.ProvideDependency(frontend.GetAllUsersStatistics, di))
		website.GET("/questionnaires/:name", middleware.ProvideDependency(backend.QuestionnaireByName, di))
		website.GET("/questionnaires/id/:id", middleware.ProvideDependency(backend.QuestionnaireById, di))
		website.PUT("/questionnaires/update", middleware.ProvideDependency(backend.QuestionnaireUpdate, di))
		website.POST("/notify", middleware.ProvideDependency(frontend.SendNotification, di))
		website.GET("/recommendations", middleware.ProvideDependency(backend.GetAllRecommendations, di))
		website.GET("/v1/recommendations", middleware.ProvideDependency(v1.GetAllRecommendationsV1, di))
		website.POST("/diseases/add", middleware.ProvideDependency(backend.AddDisease, di))
		website.POST("/diseases/delete", middleware.ProvideDependency(backend.DeleteDisease, di))
		website.POST("/questionnaires/add", middleware.ProvideDependency(backend.QuestionnaireAdd, di))
	}

	// Backend админка
	admin := router.Group("/admin")
	{
		admin.GET("/recommendations", middleware.ProvideDependency(backend.GetAllRecommendations, di))
		admin.GET("/v1/recommendations", middleware.ProvideDependency(v1.GetAllRecommendationsV1, di))
		admin.POST("/diseases/add", middleware.ProvideDependency(backend.AddDisease, di))
		admin.POST("/v1/diseases/add", middleware.ProvideDependency(v1.AddDisease, di))
		admin.POST("/v1/diseases/delete", middleware.ProvideDependency(v1.DeleteDisease, di))
		admin.POST("/diseases/delete", middleware.ProvideDependency(backend.DeleteDisease, di))
		admin.POST("/questionnaires/add", middleware.ProvideDependency(backend.QuestionnaireAdd, di))
	}
}
