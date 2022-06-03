package mongoDB

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Options struct {
	Host     string
	Username string
	Password string
}

func GetConnection(mongoOptions Options) (*mongo.Client, error) {
	clientOptions := options.Client().ApplyURI(
		fmt.Sprintf(
			"\"mongodb+srv://%s:%s@%s/?retryWrites=true&w=majority\"",
			mongoOptions.Username,
			mongoOptions.Password,
			mongoOptions.Host,
		),
	)

	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return nil, err
	}

	return client, err
}
