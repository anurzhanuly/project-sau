package products

type Number struct {
	UserAnswer       string
	DiseaseCondition string
}

func (n Number) DoesMatch() bool {
	return false
}

func (n Number) DoMultiMatch() bool {
	return false
}
