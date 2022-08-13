package notificator

import "anurzhanuly/project-sau/app/di"

type Sender interface {
	Send(di di.DI)
}
