package database

import (
	"anurzhanuly/project-sau/database/mongodb"
	"anurzhanuly/project-sau/database/mysql"
)

type Options struct {
	MongoDB mongodb.Options
	MySQL   mysql.Options
}
