package http

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http/backend"
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

	// Frontend сам сайт
	website := router.Group("site")
	{
		website.GET("/_health", middleware.ProvideDependency(frontend.Health, di))
		website.POST("/diseases/recommendations", middleware.ProvideDependency(frontend.HealthGetRecommendation, di))
		website.GET("/userAnswers", middleware.ProvideDependency(frontend.GetAllUsersStatistics, di))
		website.GET("/questionnaires/:name", middleware.ProvideDependency(frontend.QuestionnaireByName, di))
		website.GET("/questionnaires/id/:id", middleware.ProvideDependency(frontend.QuestionnaireById, di))
		website.PUT("/questionnaires/update", middleware.ProvideDependency(frontend.QuestionnaireUpdate, di))
		website.POST("/notify", middleware.ProvideDependency(frontend.SendNotification, di))
	}

	// Backend админка
	admin := router.Group("/admin")
	{
		admin.GET("/recommendations", middleware.ProvideDependency(backend.GetAllRecommendations, di))
		admin.POST("/diseases/add", middleware.ProvideDependency(frontend.AddDisease, di))
		admin.POST("/diseases/delete", middleware.ProvideDependency(frontend.DeleteDisease, di))
		admin.POST("/questionnaires/add", middleware.ProvideDependency(frontend.QuestionnaireAdd, di))
	}
}
