package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Single struct {
	CompareType string
}

func (s Single) GetComparator() Comparator {
	if s.CompareType == diseases.EXACT_TYPE {
		return &MultiExact{}
	}

	return &Empty{}
}
