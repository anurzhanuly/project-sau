package environment

import (
	"anurzhanuly/project-sau/db/mysql"
	"github.com/BurntSushi/toml"
)

type Config struct {
	filePath     string
	Listen       string
	Debug        bool
	MySqlOptions mysql.Options
}

func NewConfig(filePath string) Config {
	return Config{
		filePath: filePath,
	}
}

func (c *Config) Init() error {
	_, err := toml.DecodeFile(c.filePath, c)
	return err
}
