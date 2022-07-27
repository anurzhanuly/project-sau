package factory

import "anurzhanuly/project-sau/app/modules/comparator/factory/products"

type Multi struct {
}

func (m Multi) getComparator(valueType string) products.Comparator {
	if valueType == products.StringType {
		return &products.Number{}
	} else if valueType == products.IntegerType {
		return &products.Text{}
	}

	return nil
}
