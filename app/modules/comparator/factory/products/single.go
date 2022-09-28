package products

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products/multiple"
	"anurzhanuly/project-sau/app/modules/comparator/factory/products/single"
	"anurzhanuly/project-sau/app/modules/data"
)

type Single struct {
	CompareType string
}

func (s Single) GetComparator() Comparator {
	if s.CompareType == data.EXACT_TYPE {
		return &multiple.Exact{}
	}

	return &single.Empty{}
}
