package comparator

type Comparator interface {
	DoesMatch() bool
	DoMultiMatch() bool
}
