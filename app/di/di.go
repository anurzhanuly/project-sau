package di

import (
	"anurzhanuly/project-sau/db/mongoDB"
	"anurzhanuly/project-sau/db/mysql"
	"anurzhanuly/project-sau/environment"
	"database/sql"
	"go.mongodb.org/mongo-driver/mongo"
)

type DI struct {
	Config  environment.Config
	MySql   *sql.DB
	MongoDB *mongo.Client
}

func NewDi(config environment.Config) (di DI) {
	return DI{Config: config}
}

func (di *DI) Init() {
	di.initDb()
}

func (di *DI) initDb() {
	var err error
	di.MySql, err = mysql.GetConnection(di.Config.Database.MySQL)
	if err != nil {
		panic(err)
	}

	di.MongoDB, err = mongoDB.GetConnection(di.Config.Database.MongoDB)
	if err != nil {
		panic(err)
	}
}
