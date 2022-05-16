package environment

import "github.com/BurntSushi/toml"

type Config struct {
	filePath string
	Listen   string
	Debug    bool
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
