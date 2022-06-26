package handlers

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/migration/nhs"
	"github.com/gin-gonic/gin"
)

func Migrate(c *gin.Context, di *di.DI) {
	nhs.Migrate(c, di)
}
