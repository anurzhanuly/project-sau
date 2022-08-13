package whatsapp

type Message struct {
	Content string
	To      string
	Medium  string
}

type Options struct {
	SID   string
	Token string
}

func (m Message) Send() {

}
