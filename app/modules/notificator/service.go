package notificator

import (
	"anurzhanuly/project-sau/app/di"
	"github.com/gin-gonic/gin"
)

type Service struct {
	Medium  Sender
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
	s.Medium.Send()
}
