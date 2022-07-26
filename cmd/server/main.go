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

func main() {
	config, err := getConfig()
	if err != nil {
		fmt.Println("Ошибка при инициализации конфигов сервера")
	}

	container := di.NewDi(config)
	container.Init()
	defer container.Release()

	port := os.Getenv("PORT")
	if port == "" {
		port = config.Listen
	}

	nethttp.Handle("/", http.Router(config.Debug, container))

	if err = nethttp.ListenAndServe(":"+port, nil); err != nil {
		fmt.Println("Ошибка при запуске http сервера")
	}
}

func getConfig() (environment.Config, error) {
	configPath := flag.String(
		"config",
		defaultConfigPath,
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
