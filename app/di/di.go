package di

import "anurzhanuly/project-sau/environment"

type DI struct {
	Config environment.Config
}

func NewDi(config environment.Config) (di DI) {
	return DI{Config: config}
}
