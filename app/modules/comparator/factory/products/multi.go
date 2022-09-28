package products

import "anurzhanuly/project-sau/app/modules/data"

type Multi struct {
	CompareType string
}

func (m Multi) GetComparator() Comparator {
	if m.CompareType == data.EXACT_TYPE {
		return &MultiExact{}
	}

	return &Empty{}
}
