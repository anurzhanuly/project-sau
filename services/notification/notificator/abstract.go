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

type Content struct {
	Medium  string `json:"medium"`
	Message string `json:"message"`
	To      string `json:"to"`
	From    string `json:"from"`
}

type Sender interface {
	Send(di di.DI)
}

func Get(content Content) Sender {
	if content.Medium == WhatsApp {
		return &whatsapp.Notificator{
			Message: content.Message,
			To:      content.To,
			From:    content.From,
		}
	}

	return nil
}
