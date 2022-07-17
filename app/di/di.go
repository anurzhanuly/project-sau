package di

import (
	"anurzhanuly/project-sau/app/environment"
	"anurzhanuly/project-sau/database/mongodb"
	"context"
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
	//di.MySql, err = mysql.GetConnection(di.Config.Database.MySQL)
	//if err != nil {
	//	panic(err)
	//}

	di.MongoDB, err = mongodb.GetConnection(di.Config.Database.MongoDB)
	if err != nil {
		panic(err)
	}
}

func (di *DI) Release() {
	//di.MySql.Close()
	err := di.MongoDB.Disconnect(context.TODO())
	if err != nil {
		return
	}
}
