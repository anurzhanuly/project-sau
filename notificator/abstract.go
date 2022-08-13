package notificator

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/notificator/whatsapp"
)

type Sender interface {
	Send(di di.DI)
}

type Options struct {
	WhatsApp whatsapp.Options
}
