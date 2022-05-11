package main

import (
	"anurzhanuly/project-sau/environment"
	"flag"
)

const defaultFilePath = "config/development/sau.toml"

func main() {
	configPath := flag.String(
		"config",
		defaultFilePath,
		"Путь к файлу с конфигурациями",
	)
	flag.Parse()

	config := environment.NewConfig(*configPath)

	err := config.Init()
	if err != nil {
		return
	}
}
