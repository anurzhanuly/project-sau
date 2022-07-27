package factory

import "anurzhanuly/project-sau/app/modules/comparator/factory/products"

type Single struct {
}

func (s Single) getComparator(valueType string) products.Comparator {
	if valueType == products.StringType {
		return &products.Number{}
	} else if valueType == products.IntegerType {
		return &products.Text{}
	}

	return nil
}
