package products

import "anurzhanuly/project-sau/app/modules/diseases"

type Multi struct {
	CompareType string
}

func (m Multi) GetComparator() Comparator {
	if m.CompareType == diseases.EXACT_TYPE {
		return &MultiExact{}
	}

	return &Empty{}
}
