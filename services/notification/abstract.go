package notification

type WhatsAppOptions struct {
	SID   string
	Token string
}

type Options struct {
	WhatsApp WhatsAppOptions
}
