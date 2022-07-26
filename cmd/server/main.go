package main

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/environment"
	"anurzhanuly/project-sau/app/http"
	"flag"
	log "github.com/sirupsen/logrus"
	nethttp "net/http"
	"os"
)

const defaultConfigPath = "config/development/sau.toml"
const productionConfigPath = "config/production/production.toml"

func init() {
	log.SetOutput(os.Stdout)
	log.SetReportCaller(true)
}

func main() {
	var err error
	var config environment.Config

	config, err = getConfig()
	if err != nil {
		log.WithFields(log.Fields{
			"message": "Ошибка при инициализации конфигов",
			"error":   err.Error(),
		}).Error()
	}

	container := di.NewDi(config)
	container.Init()
	defer container.Release()

	nethttp.Handle("/", http.Router(config.Debug, container))

	if err = nethttp.ListenAndServe(config.IP+config.Port, nil); err != nil {
		log.WithFields(log.Fields{
			"message": "Ошибка при запуске http сервера",
			"error":   err.Error(),
		}).Error()
	}
}

func getConfig() (environment.Config, error) {
	path := defaultConfigPath
	port := os.Getenv("PORT")
	if port != "" {
		path = productionConfigPath
	}

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

	config.Port = port

	return config, nil
}
