package app

import (
	"anurzhanuly/project-sau/app/configurations"
)

type Init interface {
	Init(config configurations.Pool)
}
