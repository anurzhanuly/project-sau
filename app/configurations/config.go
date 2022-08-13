package configurations

import (
	"anurzhanuly/project-sau/app/modules/notificator"
	"anurzhanuly/project-sau/database"
	"github.com/BurntSushi/toml"
)

const (
	DefaultConfigPath    = "environment/development/sau.toml"
	ProductionConfigPath = "environment/production/production.toml"
)

type Pool struct {
	filePath          string
	StaticPath        string
	IP                string
	Port              string
	Debug             bool
	Database          database.Options
	Collections       Options
	MongoDatabaseName string
	Notificator       notificator.Options
}

func NewConfig(filePath string) Pool {
	return Pool{
		filePath: filePath,
	}
}

func (c *Pool) Init() error {
	_, err := toml.DecodeFile(c.filePath, c)
	return err
}
