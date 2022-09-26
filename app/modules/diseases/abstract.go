package diseases

/**
Виды Compare:
Except - кроме какого-то значения
Exact - exact value comparison
Less - less than a given value
Greater - greater than a given value
Optional - one of a given cases should match
*/
const (
	// RANGE_TYPE Range - between two numeric values
	RANGE_TYPE = "range"

	// EXACT_TYPE exact value comparison
	EXACT_TYPE = "exact"

	// EXCEPT_TYPE кроме какого-то значения
	EXCEPT_TYPE = "Except"

	// LESS_TYPE less than a given value
	LESS_TYPE = "less"

	// GREATER_TYPE greater than a given value
	GREATER_TYPE = "greater"

	// OPTIONAL_TYPE one of a given cases should match
	OPTIONAL_TYPE = "optional"
)
