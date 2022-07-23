package products

type Value interface {
	DoesMatch() bool
	DoMultiMatch() bool
}
