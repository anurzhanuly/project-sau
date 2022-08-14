package notificator

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/services/notification/notificator/whatsapp"
)

const (
	WhatsApp = "whatsapp"
	Sms      = "sms"
	Email    = "email"
)

type Sender interface {
	Send(di di.DI)
}

func Get(notificator string) Sender {
	if notificator == WhatsApp {
		return &whatsapp.Notificator{}
	}

	return nil
}
