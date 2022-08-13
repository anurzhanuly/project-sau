package whatsapp

import (
	"anurzhanuly/project-sau/app/di"
	"fmt"
	"github.com/twilio/twilio-go"
	openapi "github.com/twilio/twilio-go/rest/api/v2010"
)

type Message struct {
	Content string
	To      string
	Medium  string
}

func (m Message) Send(di di.DI) {
	config := di.Config.Notificator.WhatsApp

	client := twilio.NewRestClientWithParams(twilio.ClientParams{
		Username: config.SID,
		Password: config.Token,
	})

	params := &openapi.CreateMessageParams{}
	params.SetTo("whatsapp:+7775")
	params.SetFrom("whatsapp:+14155238886")
	params.SetBody("Hello from Go!")

	resp, err := client.Api.CreateMessage(params)
	if err != nil {
		fmt.Println(err.Error())
		err = nil
	} else {
		fmt.Println("Message Sid: " + *resp.Sid)
	}
}
