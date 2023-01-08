package factory

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products"
	"anurzhanuly/project-sau/app/modules/data"
)

type ComparatorFactory interface {
	GetComparator() products.Comparator
}

func GetAnswersComparator(condition data.ConditionInterface) products.Comparator {
	if condition.IsMulti() {
		multi := products.Multi{CompareType: condition.GetCompareType()}

		return multi.GetComparator()
	}

	single := products.Single{CompareType: condition.GetCompareType()}

	return single.GetComparator()
}
