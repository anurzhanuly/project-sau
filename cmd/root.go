package cmd

import (
	"anurzhanuly/project-sau/cmd/server"
	"anurzhanuly/project-sau/environment"
	"flag"
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

	server.Init(config)
}
