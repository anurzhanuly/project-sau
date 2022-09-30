package diseases

import (
	"anurzhanuly/project-sau/app/modules/data"
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
			ID:   16,
			Name: "Гепатиты",
			Tests: map[string][]string{
				"1": {
					"HBsAg",
					"anti-HCV",
					"вакцинация против Гепатита B",
					"anti-HIV",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"84": {
						Values:   []string{"12", "65"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
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
			Conditions: []map[string]data.Condition{
				{
					"2": {
						Values:   []string{"26"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "1",
					},
					"1": {
						Values:   []string{"женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"2": {
						Values:   []string{"27", "29"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					},
					"1": {
						Values:   []string{"женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"2": {
						Values:   []string{"30", "65"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "3",
					},
					"1": {
						Values:   []string{"женщина"},
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
			Conditions: []map[string]data.Condition{
				{
					"12": {
						Values:   []string{"Воспалительное заболевание кишечника (ВЗК)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"120": {
						Values:   []string{">10 лет назад"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"121": {
						Values:   []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"122": {
						Values:   []string{"поражения или новообразования, связанные с дисплазией"},
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
			Conditions: []map[string]data.Condition{
				{
					"123": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Values:   []string{"60"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"123": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"2": {
						Values:   []string{"60"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"113": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"114": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"115": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"116": {
						Values: []string{
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
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"118": {
						Values:   []string{"Да"},
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
			Conditions: []map[string]data.Condition{
				{
					"123": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Values:   []string{"60"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"123": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"2": {
						Values:   []string{"60"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"113": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"114": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"115": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"116": {
						Values: []string{
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
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
					"118": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
				},
			},
		},
		{
			ID:   2,
			Name: "Рак груди",
			Tests: map[string][]string{
				"1": {"Маммография (каждые 2 года)", "Посещение маммолога раз в год"},
				"2": {"Маммография и посещение маммолога раз в год"},
				"3": {"УЗИ молочных желез"},
			},
			Conditions: []map[string]data.Condition{
				{
					"1": {
						Values:   []string{"Женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Values:   []string{"50", "69"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
					},
					"10": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"1": {
						Values:   []string{"Женщина"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"2": {
						Values:   []string{"40", "49"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					},
					"10": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"20": {
						Values:   []string{"Рак молочных желез"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"49": {
						Values:   []string{""},
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
				},
				"2": {
					"Поддерживать рекомендуемый уровень холестерина ЛПНП < 1.8ммоль/л",
				},
				"3": {
					"Поддерживать рекомендуемый уровень холестерина ЛПНП < 2.6 ммоль/л",
				},
				"4": {
					"Контролировать артериальное давление на уровне <130/80",
				},
				"5": {
					"Заниматься физической активностью умеренной интенсивности не менее 30 минут в день (ходьба, бег или другие виды спорта)",
				},
				"6": {
					"Уменьшить употребление алкоголя",
				},
				"7": {
					"Бросить курить",
				},
				"8": {
					"Скрининг на Фибриляцию предсердий в пунктах первичной медико-санитарной помощи путем оценки пульса с последующей ЭКГ",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"16": {
						Values:   []string{"(АГ) артериальная гипертензия / повышенное давление"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "1",
					},
				},
				{
					"16": {
						Values:   []string{"Перенесенный инсульт"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"16": {
						Values:   []string{"Сахарный диабет", "Гиперлипидемия/атеросклероз"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "3",
					},
				},
				{
					"16": {
						Values:   []string{"Сахарный диабет", "(АГ) артериальная гипертензия / повышенное давление"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "4",
					},
				},
				{
					"5": {
						Values:   []string{"25"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "5",
					},
				},
				{
					"16": {
						Values:   []string{""}, //any
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "5",
					},
				},
				{
					"29": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "6",
					},
					"31": {
						Values:   []string{"8-14"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "5",
					},
				},
			},
		},
		{
			ID:   14,
			Name: "Рак печени",
			Tests: map[string][]string{
				"1": {
					"УЗИ брюшной полости каждые 6 месяцев",
					"альфа-фетопротеин (АФП) каждые 6 месяцев",
					"Не употреблять алкоголь",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"19": {
						Values:   []string{"Гепатит А", "Гепатит E"},
						Type:     "text",
						Compare:  "except",
						Multiple: true,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   18,
			Name: "Диабет",
			Tests: map[string][]string{
				"1": {
					"Уровень глюкозы в крови натощак",
					"HbA1C (гликированный гемоглобин)",
					"Пероральный глюкозотолерантный тест",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"5": {
						Values:   []string{"25"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Values:   []string{"25", "70"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"16": {
						Values:   []string{"Сахарный диабет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   19,
			Name: "Рак простаты",
			Tests: map[string][]string{
				"1": {
					"Простатический специфический антиген (ПСА) раз в три года",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"1": {
						Values:   []string{"Мужской"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"2": {
						Values:   []string{"40", "69"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
					},
					"20": {
						Values:   []string{"Рак предстательной железы (простаты)"},
						Type:     "text",
						Compare:  "optional",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"22": {
						Values:   []string{"Синдром Линча (наследственный неполипозный рак толстой кишки)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "1",
					},
				},
				{
					"57": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"58": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   19,
			Name: "Рак легких",
			Tests: map[string][]string{
				"1": {
					"Низкодозовая компьютерная томография раз в год",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"2": {
						Values:   []string{"50", "80"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
					},
					"20": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"21": {
						Values:   []string{"Меньше 1 пачки"},
						Type:     "text",
						Compare:  "except",
						Multiple: false,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   12,
			Name: "ИБС",
			Tests: map[string][]string{
				"1": {
					"Ведение дневника артериального давления",
					"Анализ холестерина, липопротеинов высокой и низкой плотности, триглицеридов",
					"Обратитесь к врачу. Для профилактики сердечно-сосудистых заболеваний, рекомендуем ограничить сладкое, жирное, мучное, алкоголь",
					"Рекомендуем минимум 30 минут в день умеренной физической нагрузки (ходьба, бег или другие виды спорта)",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"2": {
						Values:   []string{"40"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"5": {
						Values:   []string{"25"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"9": {
						Values:   []string{"<100", "100-119"},
						Type:     "text",
						Compare:  "except",
						Multiple: false,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   13,
			Name: "ХБП",
			Tests: map[string][]string{
				"1": {
					"Ежегодно креатинин в крови и ОАМ (общий анализ мочи)",
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"2": {
						Values:   []string{"50"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"12": {
						Values: []string{
							"Сахарный диабет",
							"(АГ) артериальная гипертензия / повышенное давление",
							"Ишемическая болезнь сердца",
							"ВИЧ или СПИД",
							"Онкологические заболевания",
							"Аутоиммунные заболевания",
						},
						Type:     "text",
						Compare:  "optional",
						Multiple: true,
						TestCase: "1",
					},
				},
				{
					"13": {
						Values: []string{
							"Гепатит В",
							"Гепатит С",
						},
						Type:     "text",
						Compare:  "optional",
						Multiple: true,
						TestCase: "1",
					},
				},
			},
		},
		{
			ID:   6,
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
					"тотальная колоноскопия с биопсией участков дисплазии каждые 1-2 года", // 2
				},
				"4": {
					"повторная тотальная колоноскопия через 3 года после полипэктомии",
					"Тотальная колоноскопия каждые 3 года при множественных полипах  и каждые 5лет при нормальном результате", // 3
				},
				"5": {
					"генетический тест на исследование всех известных полиморфизмов гена АPC",
					"сигмоидоскопия каждый год; фиброэзофагогастродуоденоскопия каждые 1-2 года", // 4
				},
				"6": {
					"Колоноскопия каждые 10 лет",
					"Каждый год анализ кала (с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь)",
					"Гибкая сигмоидоскопия каждые пять лет с или без фекального иммунохимического (FIT) анализа кала",
					"Тестирование кала с использованием тестов FIT и ДНК каждые один-три года", // 5
				},
				"7": {
					"генетические тесты",
					"консультация врача",
					"тотальная колоноскопия каждые 2 года", //6
				},
			},
			Conditions: []map[string]data.Condition{
				{
					"123": {
						Values:   []string{"да +возраст>60лет?"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"123": {
						Values:   []string{"да +возраст<60лет?"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{
					"124": {
						Values:   []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "3",
					},
				},
				{
					"125": {
						Values:   []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "5",
					},
				},
				{
					"2": {
						Values:   []string{"45", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "6",
					},
				},
				{
					"126": {
						Values:   []string{"да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "7",
					},
				},
				{
					"113": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"114": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"115": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"116": {
						Values:   []string{"1-2 аденомы (<1см)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
				},
				{
					"116": {
						Values:   []string{"3-4 аденомы или хотя бы 1 аденома размером более 1см"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
				},
				{
					"116": {
						Values:   []string{"Больше 5 аденом/ 3 аденомы размером больше 1см"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"117": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"118": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
				},
			},
		},
	}
}
