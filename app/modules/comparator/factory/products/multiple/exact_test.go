package multiple

import (
	"anurzhanuly/project-sau/app/modules/data"
	"testing"
)

func TestExact_DoesMatch(t *testing.T) {
	comparator := Exact{
		UserAnswer: []string{"Azeke krasava", "Aleke krasava", "Isake krasava"},
		DiseaseCondition: data.Condition{
			Values: []string{"Aleke krasava"},
		},
	}

	got := comparator.DoesMatch()

	if got != true {
		t.Errorf("got %t, wanted %t", got, true)
	}
}
