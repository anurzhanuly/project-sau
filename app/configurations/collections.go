package configurations

import (
	"anurzhanuly/project-sau/app/configurations/diseases"
	"anurzhanuly/project-sau/app/configurations/questionnaire"
)

type Options struct {
	Questionnaire questionnaire.Options
	Diseases      diseases.Options
}
