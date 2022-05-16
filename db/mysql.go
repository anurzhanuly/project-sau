package db

import "database/sql"

type Options struct {
	Host     string
	Port     int
	User     string
	Password string
	Database string
}

func GetConnection() *sql.DB {
}
