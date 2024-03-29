package whatsapp

import (
	"anurzhanuly/project-sau/app/di"
	"fmt"
	"github.com/twilio/twilio-go"
	openapi "github.com/twilio/twilio-go/rest/api/v2010"
)

type Notificator struct {
	Message string
	To      string
	From    string
}

func (m Notificator) Send(di di.DI) {
	config := di.Config.Notificator.WhatsApp

	client := twilio.NewRestClientWithParams(twilio.ClientParams{
		Username: config.SID,
		Password: config.Token,
	})

	params := &openapi.CreateMessageParams{}
	params.SetTo("whatsapp:+77783693745")
	params.SetFrom("whatsapp:+14155238886")
	params.SetBody(m.Message)

	resp, err := client.Api.CreateMessage(params)
	if err != nil {
		fmt.Println(err.Error())
		err = nil
	} else {
		fmt.Println("Message Sid: " + *resp.Sid)
	}
}
