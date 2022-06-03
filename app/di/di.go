package di

import (
	"anurzhanuly/project-sau/db/mysql"
	"anurzhanuly/project-sau/environment"
	"database/sql"
)

type DI struct {
	Config environment.Config
	MySql  *sql.DB
}

func NewDi(config environment.Config) (di DI) {
	return DI{Config: config}
}

func (di *DI) Init() {
	di.initDb()
}

func (di *DI) initDb() {
	di.MySql, _ = mysql.GetConnection(di.Config.MySqlOptions)
}
