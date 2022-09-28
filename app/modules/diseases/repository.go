package diseases

import (
	"anurzhanuly/project-sau/app/modules/diseases/settings"
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
			Conditions: []map[string]settings.Model{
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
			Conditions: []map[string]settings.Model{
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
		{
			ID:   4,
			Name: "Рак шейки матки",
			Tests: map[string][]string{
				"1": {"прививка от ВПЧ (комм.: ACS не рекомендует в возрасте старше)"},
				"2": {"Мазок шейки матки каждые 3 года"},
				"3": {"Мазок шейки матки каждые 3 года и Мазок шейки матки и ВПЧ тест каждые 5 лет ИЛИ общее обследование раз в 5 лет"},
			},
			Conditions: []map[string]settings.Model{
				{
					"2": {
						Value:    []string{"26"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "1",
					},
					"1": {
						Value:    []string{"женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"2": {
						Value:    []string{"27", "29"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					},
					"1": {
						Value:    []string{"женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"2": {
						Value:    []string{"30", "65"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "3",
					},
					"1": {
						Value:    []string{"женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
				},
			},
		},
		{
			ID:   5,
			Name: "Воспалительное заболевание кишечника",
			Tests: map[string][]string{
				"1": {"эндоскопическое наблюдение через 1-2 года"},
			},
			Conditions: []map[string]settings.Model{
				{
					"12": {
						Value:    []string{"Воспалительное заболевание кишечника (ВЗК)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"120": {
						Value:    []string{">10 лет назад"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"121": {
						Value:    []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"122": {
						Value:    []string{"поражения или новообразования, связанные с дисплазией"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   7,
			Name: "Колоректальный рак",
			Tests: map[string][]string{
				"1": {
					"каждый год анализ кала (с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь)",
					"Сигмоидоскопия/тотальная колоноскопия каждые 5лет",
				},
				"2": {
					"Тотальная колоноскопия каждые 5лет при нормальном результате",
				},
				"3": {
					"повторная тотальная колоноскопия через 3 года после",
					"Тотальная колоноскопия каждые 3 года при множественных полипах и каждые 5лет при нормальном результате",
				},
			},
			Conditions: []map[string]settings.Model{
				{
					"123": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Value:    []string{"60"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"123": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"2": {
						Value:    []string{"60"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"113": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"114": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"115": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"116": {
						Value: []string{
							"1-2 аденомы (<1см)",
							"3-4 аденомы или хотя бы 1 аденома размером более 1см",
							"больше 5 аденом/ 3 аденомы размером больше 1см",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "3",
					},
					"117": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"118": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
				},
			},
		},
		{
			ID:   12,
			Name: "ИБС",
			Tests: map[string][]string{
				"1": {
					"каждый год анализ кала (с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь)",
					"Сигмоидоскопия/тотальная колоноскопия каждые 5лет",
				},
				"2": {
					"Тотальная колоноскопия каждые 5лет при нормальном результате",
				},
				"3": {
					"повторная тотальная колоноскопия через 3 года после",
					"Тотальная колоноскопия каждые 3 года при множественных полипах и каждые 5лет при нормальном результате",
				},
			},
			Conditions: []map[string]settings.Model{
				{
					"123": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Value:    []string{"60"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"123": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"2": {
						Value:    []string{"60"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"113": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"114": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"115": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"116": {
						Value: []string{
							"1-2 аденомы (<1см)",
							"3-4 аденомы или хотя бы 1 аденома размером более 1см",
							"больше 5 аденом/ 3 аденомы размером больше 1см",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "3",
					},
					"117": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"118": {
						Value:    []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
				},
			},
		},
	}
}
