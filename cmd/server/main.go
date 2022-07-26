package main

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/environment"
	"anurzhanuly/project-sau/app/http"
	"flag"
	"fmt"
	nethttp "net/http"
	"os"
)

const defaultConfigPath = "config/development/sau.toml"
const productionConfigPath = "config/production/production.toml"

func main() {
	var err error
	var config environment.Config

	port := os.Getenv("PORT")
	if port == "" {
		config, err = getConfig(defaultConfigPath)
	} else {
		config, err = getConfig(productionConfigPath)
	}

	if err != nil {
		fmt.Println("Ошибка при инициализации конфигов сервера")
	}

	container := di.NewDi(config)
	container.Init()
	defer container.Release()

	nethttp.Handle("/", http.Router(config.Debug, container))

	if err = nethttp.ListenAndServe(config.Listen+port, nil); err != nil {
		fmt.Println("Ошибка при запуске http сервера")
	}
}

func getConfig(path string) (environment.Config, error) {
	configPath := flag.String(
		"config",
		path,
		"Путь до файла с конфигами проекта",
	)
	flag.Parse()

	config := environment.NewConfig(*configPath)
	err := config.Init()
	if err != nil {
		return config, err
	}

	return config, nil
}
