package middleware

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

type customHandler func(c *gin.Context, di *di.DI)

func ProvideDependency(handler customHandler, di di.DI) gin.HandlerFunc {
	return func(c *gin.Context) {
		handler(c, &di)
	}
}
