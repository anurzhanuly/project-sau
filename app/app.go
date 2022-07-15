package app

import (
	"anurzhanuly/project-sau/app/environment"
)

type Init interface {
	Init(config environment.Config)
}
