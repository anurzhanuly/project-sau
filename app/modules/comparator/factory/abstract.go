package factory

import "anurzhanuly/project-sau/app/modules/comparator/factory/products"

type ComparatorFactory interface {
	getComparator(valueType string) products.Comparator
}

func GetAnswersComparator(isMultiple bool) ComparatorFactory {
	if isMultiple {
		return Multi{}
	} else {
		return Single{}
	}
}
