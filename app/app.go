package app

import "anurzhanuly/project-sau/environment"

type Init interface {
	Init(config environment.Config)
}
