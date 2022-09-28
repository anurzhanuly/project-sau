package products

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products/multiple"
	"anurzhanuly/project-sau/app/modules/comparator/factory/products/single"
	"anurzhanuly/project-sau/app/modules/data"
)

type Multi struct {
	CompareType string
}

func (m Multi) GetComparator() Comparator {
	if m.CompareType == data.EXACT_TYPE {
		return &multiple.Exact{}
	} else if m.CompareType == data.EXCEPT_TYPE {
		return &multiple.Exact{}
	}

	return &single.Empty{}
}
