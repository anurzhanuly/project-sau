package database

import (
	"anurzhanuly/project-sau/backend/database/mongodb"
	"anurzhanuly/project-sau/backend/database/mysql"
)

type Options struct {
	MongoDB mongodb.Options
	MySQL   mysql.Options
}
