package db

import (
	"anurzhanuly/project-sau/db/mongo"
	"anurzhanuly/project-sau/db/mysql"
)

type Options struct {
	mongoOptions mongo.Options
	mysqlOptions mysql.Options
}
