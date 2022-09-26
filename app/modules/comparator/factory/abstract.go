package factory

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products"
	"anurzhanuly/project-sau/app/modules/diseases"
)

func GetAnswersComparator(condition diseases.Condition) products.Comparator {
	if condition.Type == diseases.EXACT_TYPE {
		return &products.Exact{}
	} else if condition.Type == diseases.RANGE_TYPE {
		return &products.Exact{}
	} else if condition.Type == diseases.EXCEPT_TYPE {
		return &products.Exact{}
	} else if condition.Type == diseases.OPTIONAL_TYPE {
		return &products.Exact{}
	} else if condition.Type == diseases.LESS_TYPE {
		return &products.Exact{}
	} else if condition.Type == diseases.GREATER_TYPE {
		return &products.Exact{}
	}

	return &products.Empty{}
}
