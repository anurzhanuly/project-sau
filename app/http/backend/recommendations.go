package backend

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/diseases"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetAllRecommendations(c *gin.Context, di *di.DI) {
	var result string
	var err error
	service := diseases.NewService(c, di)

	result, err = service.GetAllDiseases()
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": result,
	})
}
