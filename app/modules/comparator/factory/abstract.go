package factory

import (
	"anurzhanuly/project-sau/app/modules/comparator/factory/products"
	"anurzhanuly/project-sau/app/modules/diseases/settings"
)

type ComparatorFactory interface {
	GetComparator() products.Comparator
}

func GetAnswersComparator(condition settings.Model) products.Comparator {
	if condition.Multiple {
		multi := products.Multi{CompareType: condition.Compare}

		return multi.GetComparator()
	}

	single := products.Single{}

	return single.GetComparator()
}
