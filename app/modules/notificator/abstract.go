package notificator

import (
	"anurzhanuly/project-sau/app/modules/notificator/whatsapp"
)

type Sender interface {
	Send()
}

type Options struct {
	WhatsApp whatsapp.Options
}
