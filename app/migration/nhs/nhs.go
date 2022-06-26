package nhs

import (
	"anurzhanuly/project-sau/app/di"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"os"
)

type nhsFormat struct {
	Condition string          `json:"condition"`
	Sections  json.RawMessage `json:"sections"`
}

func Migrate(c *gin.Context, di *di.DI) {
	migrationSource := di.Config.MigrationSource

	for letter := 'A'; letter <= 'Z'; letter++ {
		var dataContainer []nhsFormat
		filePath := fmt.Sprintf("%s/%s.json", migrationSource, string(letter))

		file, err := os.Open(filePath)
		if err != nil {
			fmt.Printf("возникла ошибка при открытий файла %s.json: %s", string(letter), err.Error())
		}

		body, err := ioutil.ReadAll(file)
		if err != nil {
			fmt.Printf("возникла ошибка при чтении содержания файла %s.json: %s", string(letter), err.Error())
		}

		err = file.Close()
		if err != nil {
			return
		}

		err = json.Unmarshal(body, &dataContainer)
		if err != nil {
			fmt.Printf("возникла ошибка при парсинге содержания файла %s.json: %s", string(letter), err.Error())
		}
		fmt.Println(dataContainer[0])
		c.JSON(200, dataContainer[0])

		break
	}
}
