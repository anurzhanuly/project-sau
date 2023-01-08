package data

type ConditionInterface interface {
	IsMulti() bool
	GetCompareType() string
	GetValues() []string
	GetType() string
	GetTestCase() string
	GetIntValues() []int
	GetExcludedValues() []string
}
