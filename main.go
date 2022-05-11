package main

import (
	"anurzhanuly/project-sau/environment"
	"flag"
)

func main() {
	configPath := flag.String(
		"config",
		"",
		"Путь к файлу с конфигурациями",
	)
	flag.Parse()

	config := environment.NewConfig(*configPath)

	err := config.Init()
	if err != nil {
		return
	}
}
