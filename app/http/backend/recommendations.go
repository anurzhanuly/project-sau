package backend

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/diseases"
	"fmt"
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

func GetAllRecommendationsV1(c *gin.Context, di *di.DI) {
	var result string
	var err error
	service := diseases.NewService(c, di)

	result, err = service.GetAllDiseasesV1()
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": result,
	})
}

func AddDisease(c *gin.Context, di *di.DI) {
	service := diseases.NewService(c, di)

	err := service.AddDisease()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"status": http.StatusInternalServerError,
			"result": fmt.Sprintf("произошла ошибка со стороны сервера: %s", err.Error()),
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": "success",
	})
}

func DeleteDisease(c *gin.Context, di *di.DI) {
	service := diseases.NewService(c, di)

	err := service.DeleteDisease()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"status": http.StatusInternalServerError,
			"result": fmt.Sprintf(
				"произошла ошибка со стороны сервера, во время удаления рекомендации: %s", err.Error()),
		})

		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": "success",
	})
}
