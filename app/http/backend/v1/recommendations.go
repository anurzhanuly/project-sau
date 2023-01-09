package v1

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/diseases"
	"anurzhanuly/project-sau/app/modules/diseases/v1"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

// GetAllRecommendationsV1 возвращает все условия по заболеванию по новому формату
func GetAllRecommendationsV1(c *gin.Context, di *di.DI) {
	var result string
	var err error
	service := diseases.NewService(c, di)

	result, err = service.FetchAllRecommendationsV1()
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": result,
	})
}

// AddDiseaseV1 добавляет условие по заболеванию, или апдейтит существующий по новому формату
func AddDiseaseV1(c *gin.Context, di *di.DI) {
	service := v1.NewService(c, di)

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
