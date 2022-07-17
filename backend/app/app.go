package app

import (
	"anurzhanuly/project-sau/backend/app/environment"
)

type Init interface {
	Init(config environment.Config)
}
