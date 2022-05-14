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
	config, err := getConfig()
	if err != nil {
		fmt.Println("Error while running server...")
	}

	container := di.NewDi(config)
	nethttp.Handle("/", http.Router(config.Debug, container))
	nethttp.HandleFunc("/health", health)

	server.Init(config)

	if err = nethttp.ListenAndServe(config.Listen, nil); err != nil {
		fmt.Println("Error while running server...")
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

func health(w nethttp.ResponseWriter, _ *nethttp.Request) {
	w.WriteHeader(200)
}
