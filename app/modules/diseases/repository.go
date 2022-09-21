package diseases

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"time"
)

type Repository struct {
	collection *mongo.Collection
}

func (r Repository) getAllDiseases() ([]Disease, error) {
	var diseases []Disease
	var err error

	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	cursor, err := r.collection.Find(ctx, bson.M{})
	if err != nil {
		return diseases, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var disease Disease

		err := cursor.Decode(&disease)
		if err != nil {
			return diseases, err
		}

		diseases = append(diseases, disease)
	}

	return diseases, err
}

func (r Repository) addDisease(model Disease) error {
	var err error

	cxt, _ := context.WithTimeout(context.Background(), 10*time.Second)

	result, err := r.collection.InsertOne(cxt, model)
	if err != nil {
		return err
	}

	result = result

	return err
}

/**
Виды Compare:
Except - кроме какого-то значения
Exact - exact value comparison
Range - between two numeric values
Less - less than a given value
Greater - greater than a given value
Optional - one of a given cases should match
*/

func (r Repository) getAllHardcodedDiseases() []HardcodedDisease {
	return []HardcodedDisease{
		{
			ID:   2,
			Name: "Рак груди",
			Tests: map[string][]string{
				"1": {"Маммография (каждые 2 года)", "Посещение маммолога раз в год"},
				"2": {"Маммография и посещение маммолога раз в год"},
				"3": {"УЗИ молочных желез"},
			},
			Conditions: []map[string]Conditions{
				{
					"1": {
						Value:    []string{"Женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Value:    []string{"50", "69"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
					},
					"10": {
						Value:    []string{"нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"1": {
						Value:    []string{"Женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"2": {
						Value:    []string{"40", "49"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					},
					"10": {
						Value:    []string{"нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"18": {
						Value:    []string{"рак груди"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"49": {
						Value:    []string{"Ничего"},
						Type:     "text",
						Compare:  "except",
						Multiple: false,
						TestCase: "3",
					},
				},
			},
		},
		{
			ID:   3,
			Name: "Инсульт",
			Tests: map[string][]string{
				"1": {
					"Контролировать артериальное давление на уровне <140/90",
					"Поддерживать рекомендуемый уровень холестерина ЛПНП <160 мг/дл (4,15 ммоль/л)",
					"Заниматься физической активностью умеренной интенсивности не менее 30 минут в день (ходьба, бег или другие виды спорта)",
					"Уменьшить употребление алкоголя",
					"Бросить курить",
					"Скрининг на Фибриляцию предсердий в пунктах первичной медико-санитарной помощи путем оценки пульса с последующей ЭКГ",
				},
				"2": {
					"Контролировать артериальное давление на уровне <140/90",
					"Поддерживать рекомендуемый уровень холестерина ЛПНП <160 мг/дл (4,15 ммоль/л)",
					"Заниматься физической активностью умеренной интенсивности не менее 30 минут в день (ходьба, бег или другие виды спорта)",
					"Уменьшить употребление алкоголя",
					"Бросить курить",
				},
			},
			Conditions: []map[string]Conditions{
				{
					"2": {
						Value:    []string{"65"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
					"5": {
						Value:    []string{"25"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
					"12": {
						Value: []string{
							"повышенное давление",
							"атеросклероз",
							"Сахарный диабет",
							"Перенесенный инсульт",
							"Фибрилляция предсердий",
						},
						Type:     "text",
						Compare:  "optional",
						Multiple: true,
						TestCase: "1",
					},
					"20": {
						Value:    []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"23": {
						Value:    []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"24": {
						Value:    []string{"8-14"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"2": {
						Value:    []string{"65"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "2",
					},
					"5": {
						Value:    []string{"25"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "2",
					},
					"12": {
						Value: []string{
							"повышенное давление",
							"атеросклероз",
							"Сахарный диабет",
							"Перенесенный инсульт",
							"Фибрилляция предсердий",
						},
						Type:     "text",
						Compare:  "optional",
						Multiple: true,
						TestCase: "2",
					},
					"20": {
						Value:    []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"23": {
						Value:    []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"24": {
						Value:    []string{"8-14"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
			},
		},
	}
}
