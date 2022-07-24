package factory

type Comparator interface {
	getComparator()
}

func GetComparator() Comparator {
	return Single{}
}
