package configurations

import (
	"anurzhanuly/project-sau/database"
	"github.com/BurntSushi/toml"
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
