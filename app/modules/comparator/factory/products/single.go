package products

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products/single"
	"anurzhanuly/project-sau/app/modules/data"
)

type Single struct {
	CompareType string
}

func (s Single) GetComparator() Comparator {
	if s.CompareType == data.EXACT_TYPE {
		return &single.Exact{}
	} else if s.CompareType == data.LESS_TYPE {
		return &single.Less{}
	} else if s.CompareType == data.GREATER_TYPE {
		return &single.Greater{}
	} else if s.CompareType == data.RANGE_TYPE {
		return &single.Range{}
	}

	return &Empty{}
}
