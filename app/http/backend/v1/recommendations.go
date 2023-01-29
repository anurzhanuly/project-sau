package v1

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/diseases"
	"anurzhanuly/project-sau/app/modules/diseases/v1"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

// SaveAll сохраняет массив с рекомендациями по заболеванию
func SaveAll(c *gin.Context, di *di.DI) {
	var result bool
	var err error
	service := v1.NewService(c, di)

	err = service.SaveAll()
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": http.StatusOK,
		"result": result,
	})
}

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

// SaveDisease добавляет условие по заболеванию, или апдейтит существующий по новому формату
func SaveDisease(c *gin.Context, di *di.DI) {
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

// DeleteDisease удаляет условие по заболеванию
func DeleteDisease(c *gin.Context, di *di.DI) {
	service := v1.NewService(c, di)

	err := service.ExecuteDeletion()
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
