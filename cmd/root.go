package cmd

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http"
	"anurzhanuly/project-sau/app/server"
	"anurzhanuly/project-sau/environment"
	"flag"
	"fmt"
	nethttp "net/http"
)

const defaultConfigPath = "config/development/sau.toml"

func Run() {
	configPath := flag.String(
		"config",
		defaultConfigPath,
		"Путь до файла с конфигами проекта",
	)
	flag.Parse()

	config := environment.NewConfig(*configPath)
	err := config.Init()
	if err != nil {
		return
	}

	container := di.NewDi(config)
	nethttp.Handle("/", http.Router(config.Debug, container))

	server.Init(config)

	if err = nethttp.ListenAndServe(config.Listen, nil); err != nil {
		fmt.Println("Error while running server...")
	}
}
