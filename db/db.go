package db

import (
	"anurzhanuly/project-sau/db/mongodb"
	"anurzhanuly/project-sau/db/mysql"
)

type Options struct {
	MongoDB mongodb.Options
	MySQL   mysql.Options
}
