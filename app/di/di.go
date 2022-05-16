package di

import (
	"anurzhanuly/project-sau/db"
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

func (di *DI) initDI() {
	di.initDb()
}

func (di *DI) initDb() {
	di.MySql = db.GetConnection()
}
