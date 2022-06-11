package nhs

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

type nhsFormat struct {
	Condition string          `json:"condition"`
	Sections  json.RawMessage `json:"sections"`
}

func Migrate() {
	for letter := 'A'; letter <= 'Z'; letter++ {
		var container []nhsFormat

		file, err := os.Open(fmt.Sprintf("%s.json", string(letter)))
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

		err = json.Unmarshal(body, &container)
		if err != nil {
			fmt.Printf("возникла ошибка при парсинге содержания файла %s.json: %s", string(letter), err.Error())
		}

		for index, val := range container {
			fmt.Println(index, val)
			break
		}

	}
}
