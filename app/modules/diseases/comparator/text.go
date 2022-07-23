package comparator

type Text struct {
	UserAnswer       string
	DiseaseCondition string
}

func (t Text) DoesMatch() bool {
	return false
}

func (t Text) DoMultiMatch() bool {
	return false
}
