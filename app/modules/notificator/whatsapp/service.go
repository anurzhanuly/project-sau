package whatsapp

import (
	"anurzhanuly/project-sau/app/di"
	"anurzhanuly/project-sau/app/modules/notificator"
	"github.com/gin-gonic/gin"
)

type Service struct {
	Medium  notificator.Sender
	Context *gin.Context
	DI      *di.DI
}

func NewService(ctx *gin.Context, di *di.DI) *Service {
	return &Service{
		Context: ctx,
		DI:      di,
	}
}

func (s Service) Execute() {
	s.Medium.Send(*s.DI)
}
