package factory

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products"
	"anurzhanuly/project-sau/app/modules/data"
)

type ComparatorFactory interface {
	GetComparator() products.Comparator
}

func GetAnswersComparator(condition data.Condition) products.Comparator {
	if condition.Multiple {
		multi := products.Multi{CompareType: condition.Compare}

		return multi.GetComparator()
	}

	single := products.Single{CompareType: condition.Compare}

	return single.GetComparator()
}
