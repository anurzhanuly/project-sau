package environment

import (
	"anurzhanuly/project-sau/backend/app/environment/diseases"
	"anurzhanuly/project-sau/backend/app/environment/questionnaire"
)

type Options struct {
	Questionnaire questionnaire.Options
	Diseases      diseases.Options
}
