package frontend

import (
	"anurzhanuly/project-sau/app/di"
	"context"
	"github.com/gin-gonic/gin"
	"net/http"
)

const (
	MongoName     = "MongoDB"
	SuccessStatus = "OK"
)

func Health(c *gin.Context, di *di.DI) {
	reply := gin.H{}

	err := di.MongoDB.Ping(context.Background(), nil)
	if err != nil {
		reply[MongoName] = err.Error()
		c.JSON(http.StatusOK, reply)

		return
	}

	reply[MongoName] = SuccessStatus

	c.JSON(http.StatusOK, reply)
}
