package db

import (
	"anurzhanuly/project-sau/db/mongoDB"
	"anurzhanuly/project-sau/db/mysql"
)

type Options struct {
	MongoDB mongoDB.Options
	MySQL   mysql.Options
}
