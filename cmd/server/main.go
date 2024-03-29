package main

import (
	"anurzhanuly/project-sau/app/configurations"
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/http"
	"flag"
	log "github.com/sirupsen/logrus"
	nethttp "net/http"
	"os"
)

func init() {
	log.SetOutput(os.Stdout)
	log.SetReportCaller(true)
}

func main() {
	var err error
	var config configurations.Pool

	config, err = getConfig()
	if err != nil {
		log.WithFields(log.Fields{
			"message": "Ошибка при инициализации конфигов",
			"error":   err.Error(),
		}).Error()

		return
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

func getConfig() (configurations.Pool, error) {
	path := configurations.DefaultConfigPath
	port := os.Getenv("PORT")
	if port != "" {
		path = configurations.ProductionConfigPath
	}

	configPath := flag.String(
		"config",
		path,
		"Путь до файла с конфигами проекта",
	)
	flag.Parse()

	config := configurations.NewConfig(*configPath)
	err := config.Init()
	if err != nil {
		return config, err
	}

	if port != "" {
		config.Port = port
	}

	return config, nil
}
