package products

import (
	"anurzhanuly/project-sau/app/modules/data"
)

type Single struct {
	CompareType string
}

func (s Single) GetComparator() Comparator {
	if s.CompareType == data.EXACT_TYPE {
		return &MultiExact{}
	}

	return &Empty{}
}
