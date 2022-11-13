package answers

import "anurzhanuly/project-sau/app/modules/data"

type User struct {
	Answers map[string][]string
}

type UserResult struct {
	Answers         User
	Recommendations []data.Recommendation
}
