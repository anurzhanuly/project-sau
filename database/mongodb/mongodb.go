package mongodb

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

type Options struct {
	Host     string
	Username string
	Password string
	Timeout  int
}

func GetConnection(mongoOptions Options) (*mongo.Client, error) {
	serverAPIOptions := options.ServerAPI(options.ServerAPIVersion1)

	clientOptions := options.Client().
		ApplyURI(fmt.Sprintf(
			"mongodb+srv://saubolkz:%s@cluster0.nvdhx.mongodb.net/?retryWrites=true&w=majority",
			mongoOptions.Password),
		).SetServerAPIOptions(serverAPIOptions)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	return client, nil
}
