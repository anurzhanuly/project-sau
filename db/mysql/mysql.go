package mysql

import (
	"database/sql"
	"fmt"
	"github.com/go-sql-driver/mysql"
)

type Options struct {
	Host     string
	Port     int
	User     string
	Password string
	Database string
}

func GetConnection(options Options) (*sql.DB, error) {
	cfg := mysql.Config{
		User:   options.User,
		Passwd: options.Password,
		Net:    "tcp",
		Addr:   fmt.Sprintf("%s:%d", options.Host, options.Port),
		DBName: options.Database,
	}

	var err error
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		return nil, err
	}

	pingErr := db.Ping()
	if pingErr != nil {
		return nil, pingErr
	}

	return db, err
}
