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
			ID:   1,
			Name: "Рак шейки матки",
			Tests: map[string][]string{
				"1": {"Мазок на цитологическое обследование раз в три года. Рекомендуется получить три дозы вакцины от вируса папилломы человека до 26 лет."},
				"2": {"Мазок на цитологическое обследование раз в три года."},
				"3": {"Рекомендуется получить три дозы вакцины от вируса папилломы человека до 26 лет."},
				"4": {"Мазок на цитологическое обследование раз в три года. Тест на вирус папилломы человека (ВПЧ) раз в пять лет. ИЛИ общее обследование раз в пять лет."},
				"5": {"Регулярно посещайте гинеколога."},
				"6": {"Вы указали, что болеете раком шейки матки менее двух лет. Каждые 3-6 месяцев посещайте гинеколога, делайте цитологию. Флюорография раз в год. Бросить курить (не начинать)."},
			},
			Conditions: []map[string]data.Condition{
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"27"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "1",
					},
					"Делали ли Вы прививку от вируса папилломы человека?": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"27"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "2",
					},
					"Делали ли Вы прививку от вируса папилломы человека?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"27", "29"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"30", "65"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					},
				},
				{
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"30", "64"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "4",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"65", "80"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "4",
					},
					"Делали ли Вы ранее скрининг на рак шейки матки?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"Были ли последние два скрининга отрицательными?": {
						Values:   []string{"Был только один скрининг в жизни"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"65", "80"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "4",
					},
					"Делали ли Вы ранее скрининг на рак шейки матки?": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "5",
					},
					"Сколько Вам полных лет?": {
						Values:   []string{"65", "80"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "5",
					},
					"Были ли последние два скрининга отрицательными?": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "5",
					},
				},
				{ // checked
					"Ваш пол": {
						Values:   []string{"Женский"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "6",
					},
					"Проходили ли Вы лечение рака шейки матки или предракового состояния?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "6",
					},
					"Сколько лет прошло с момента лечения?": {
						Values:   []string{"Меньше двух лет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "6",
					},
				},
			},
		},
		{
			ID:   2,
			Name: "Рак легких",
			Tests: map[string][]string{
				"1": {"Рекомендуем вам пройти консультацию или получить профессиональную и медикаментозную помощь при отказе от курения."},
				"2": {"Вам необходимо посетить врача онколога."},
				"3": {"Рекомендуем вам проходить компьютерную томографию грудной клеткикаждые 6 месяцев в течение первых 2 лет, а затем 1 раз в год. Если ваш врач выставил вам мелкоклеточный рак (тип клеток в раке) и вы не проходили профилактическое краниальное облучение, рекомендуем вам делать МРТ головного мозга каждые 3 месяца в течение первого года и раз в полгода в течение второго года после лечения."},
				"4": {"Если вы курите/курили больше 20 сигарет в день в течении последних 20 лет, рекомендуем вам обратиться к лечащему врачу (пульмонологу) и делать низкодозовый-КТ легких 1 раз в год."},
				"5": {"Если вы курите/курили больше 20 сигарет в день в течении последних 20 лет, рекомендуем вам обратиться к лечащему врачу (пульмонологу)."},
				"6": {"Обратитесь к лечащему врачу (пульмонологу, онкологу). Он подскажет, как лечиться дальше."},
			},
			Conditions: []map[string]data.Condition{
				{ // checked
					"Вы курите?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "1",
					},
				},
				{ // checked
					"Лечитесь или наблюдаетесь ли Вы по поводу рака легких?": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "2",
					},
				},
				// { // no condition, testcase 3
				//"Лечитесь или наблюдаетесь ли Вы по поводу рака легких?": {
				//Values:[]string{"Нет"},
				//Type:"text",
				//Compare:"exact",
				//Multiple: false,
				//TestCase: "3",
				//},
				// },
				{ // checked
					"Сколько Вам полных лет?": {
						Values:   []string{"49"},
						Type:     "number",
						Compare:  "greater",
						Multiple: false,
						TestCase: "4",
					},
					"Сколько лет Вы курите?": {
						Values:   []string{"Больше 15 лет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "4",
					},
					"Сколько пачек в день Вы курите?": {
						Values:   []string{"Меньше 1 пачки"},
						Type:     "text",
						Compare:  "except",
						Multiple: false,
						TestCase: "4",
					},
				},
				{ // checked
					"Сколько Вам полных лет?": {
						Values:   []string{"50"},
						Type:     "number",
						Compare:  "less",
						Multiple: false,
						TestCase: "5",
					},
					"Сколько лет Вы курите?": {
						Values:   []string{"Больше 15 лет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "5",
					},
					"Сколько пачек в день Вы курите?": {
						Values:   []string{"Меньше 1 пачки"},
						Type:     "text",
						Compare:  "except",
						Multiple: false,
						TestCase: "5",
					},
				},
				{ // checked
					"Были ли выявлены легочные узелки при первичном КТ?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "6",
					},
				},
			},
		},
		{
			ID:   3,
			Name: "Колоректальный рак",
			Tests: map[string][]string{
				"1": {
					"Рекомендуем вам сдавать каждый год анализ кала на скрытую кровь (с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь), каждые 5 лет проходить сигмоидоскопию либо тотальная колоноскопию.Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий.",
				},
				"2": {
					"Рекомендуем вам сдавать каждый год анализ кала на скрытую кровь (с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь), каждые 5 лет проходить сигмоидоскопию либо тотальная колоноскопию.Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий.",
				},
				"3": {
					"Рекомендуется любая из следующих стратегий скрининга:Колоноскопия каждые 10 лет, Каждый год анализ кала на скрытую кровь (с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь), Каждые 5 лет гибкая сигмоидоскопия с или без фекального иммунохимического (FIT) анализа кала, Каждые 1-3 года тестирование кала с использованием тестов FIT и ДНК.",
				},
				"4": {
					"Рекомендуем вам проходить тотальную колоноскопию каждые 5лет (при нормальном результате).Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий. ",
				},
				"5": {
					"Рекомендуем вам проходить тотальную колоноскопию каждые 5лет (при нормальном результате).Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий. ",
				},
				"6": {
					"Тотальная колоноскопия с биопсией участков дисплазии каждые 1-2 года.Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий. ",
				},
				"7": {
					"Рекомендуем вам пройти генетический тест на исследование всех известных полиморфизмов гена АPC;сигмоидоскопия каждый год; фиброэзофагогастродуоденоскопия каждые 1-2 года.Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий. ",
				},
				"8": {
					"Рекомендуем вам пройти генетические тесты и консультацию врача (гастроэнтеролога);проходить тотальная колоноскопия каждые 2 года. Ешьте меньше красного мяса, включайте в свой рацион больше фруктов и овощей. Ограничьте употребление сахара, жиров и алкоголя. Не употребляйте табачных изделий.",
				},
				"9": {
					"Рекомендуем пройти повторную тотальную колоноскопию через 5 летпосле полипэктомии. При нормальном результате - каждые 5 лет. При множественных полипах - каждые 3 года.",
				},
				"10": {
					"Рекомендуем вам пройти повторную консультацию врача (гастроэнтеролог, колоректальный хирург)",
				},
				"11": {
					"Настоятельно рекомендуем Вам пройти консультацию онколога. ",
				},
				"12": {
					"Рекомендуем проходить вам в течение года после лечения пройти колоноскопию. При аденомах кишечника – повторить через 1 год; при отсутствии аденом – повторить через 3 года; в дальнейшем при отсутствии патологии проходить колоноскопию 1 раз в 5 лет.",
				},
				"13": {
					"Рекомендуем вам: 1) в течение года после лечения пройти колоноскопию. При аденомах – повторить через 1 год; при отсутствии аденом – повторить через 3 года; в дальнейшем при отсутствии патологии1 раз в 5 лет. 2) в первые два года проходить тест на онкомаркер (раковый эмбриональный антиген) и делать КТ брюшной полости, грудной клетки, малого таза с контрастированием 1 раз в 3 мес., затем – каждые 6 мес. на протяжении 3–5 лет наблюдения.",
				},
				"14": {
					"Рекомендуем вам: 1)в течение первого года после лечения пройти колоноскопию. При аденомах – повторить через 1 год; при отсутствии аденом – повторить через 3 года; в дальнейшем при отсутствии патологии1 раз в 5 лет.2) в первые два года сдавать тест на онкомаркер (раковый эмбриональный антиген)и проходить УЗИ брюшной полости, забрюшинного пространства, малого таза 1 раз в 3 мес., затем – каждые 6 мес. на протяжении 3–5 лет наблюдения. 3)в первые два года КТ брюшной полости, грудной клетки, малого таза с контрастированием 1 раз в 6 мес., затем – 1 раз в год на протяжении 3–5 лет наблюдения.",
				},
				"15": {
					"Пожалуйста, уточните у вашего лечащего врача, как часто вам нужно проходить наблюдение по поводу рака прямой или толстой кишки.",
				},
			},
			Conditions: []map[string]data.Condition{
				{ //checked
					"Сколько Вам полных лет?": {
						Values:   []string{"20", "44"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "1",
					}, //
					"Отметьте какие онкологические заболевания есть/были у ваших близких родственников?": {
						Values:   []string{"Рак прямой или толстой кишки в возрасте после 60 лет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "1",
					},
					"Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)": {
						Values:   []string{"Полипы в толстой или прямой кишке (в возрасте после 60 лет)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "1",
					},
				},
				{ // I have questions
					"Сколько Вам полных лет?": {
						Values:   []string{"45", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "2",
					}, //
					"Отметьте какие онкологические заболевания есть/были у ваших близких родственников?": {
						Values: []string{
							"Рак прямой или толстой кишки в возрасте после 60 лет",
							"Рак прямой или толстой кишки в возрасте до 60 лет",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "2",
					},
				},
				{ // questions
					"Сколько Вам полных лет?": {
						Values:   []string{"45", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "3",
					}, //
					"Отметьте какие онкологические заболевания есть/были у ваших близких родственников?": {
						Values: []string{
							"Рак прямой или толстой кишки в возрасте до 60 лет",
							"Рак прямой или толстой кишки в возрасте после 60 лет",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "3",
					},
					"Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)": {
						Values: []string{
							"Полипы в толстой или прямой кишке (в возрасте до 60 лет)",
							"Семейный аденоматозный полипоз (FAP)",
							"Синдром Линча (наследственный неполипозный рак толстой кишки)",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "3",
					},
					"Отметьте, какие хронические заболевания у вас есть или были": {
						Values: []string{
							"Болезнь Крона или Язвенный Колит (Воспалительное заболевание кишечника (ВЗК))",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "3",
					},
				},
				{ // I have questions
					"Сколько Вам полных лет?": {
						Values:   []string{"20", "44"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "4",
					}, //
					"Отметьте какие онкологические заболевания есть/были у ваших близких родственников?": {
						Values:   []string{"Рак прямой или толстой кишки в возрасте до 60 лет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "4",
					},
					"Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)": {
						Values: []string{
							"Полипы в толстой или прямой кишке (в возрасте до 60 лет)",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "4",
					},
				},
				{ // I have questions
					"Сколько Вам полных лет?": {
						Values:   []string{"45", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "5",
					}, //
					"Отметьте какие онкологические заболевания есть/были у ваших близких родственников?": {
						Values:   []string{"Рак прямой или толстой кишки в возрасте до 60 лет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "5",
					},
					"Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)": {
						Values: []string{
							"Полипы в толстой или прямой кишке (в возрасте до 60 лет)",
						},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "5",
					},
				},
				{ // I have questions
					"Сколько Вам полных лет?": {
						Values:   []string{"20", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "6",
					}, //
					"Отметьте, какие хронические заболевания у вас есть или были": {
						Values:   []string{"Болезнь Крона или Язвенный Колит (Воспалительное заболевание кишечника (ВЗК))"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "6",
					},
				},
				{ // I have questions
					"Сколько Вам полных лет?": {
						Values:   []string{"20", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "7",
					}, //
					"Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)": {
						Values:   []string{"Семейный аденоматозный полипоз (FAP)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "7",
					},
				},
				{ // I have questions
					"Сколько Вам полных лет?": {
						Values:   []string{"20", "75"},
						Type:     "number",
						Compare:  "range",
						Multiple: false,
						TestCase: "8",
					}, //
					"Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)": {
						Values:   []string{"Синдром Линча (наследственный неполипозный рак толстой кишки)"},
						Type:     "text",
						Compare:  "exact",
						Multiple: true,
						TestCase: "8",
					},
				},
				{ // I have questions
					"Делали ли Вам полипэктомию?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "9",
					},
				},
				{ // I have questions
					"Была ли обнаружена патология в результате исследования материала биопсии толстой и прямой кишки, полученного в результате эндоскопического исследования?": {
						Values:   []string{"Да"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "10",
					},
				},
				{ // I have questions
					"Вы проходили курс лечения рака толстой и прямой кишки?": {
						Values:   []string{"Нет"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "11",
					},
				},
				{ // I have questions
					"На какой стадии был выявлен рак толстой и прямой кишки?": {
						Values:   []string{"I"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "12",
					},
				},
				{ // I have questions
					"На какой стадии был выявлен рак толстой и прямой кишки?": {
						Values:   []string{"II-III"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "13",
					},
				},
				{ // I have questions
					"На какой стадии был выявлен рак толстой и прямой кишки?": {
						Values:   []string{"IV"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "14",
					},
				},
				{ // I have questions
					"Была ли обнаружена патология в результате исследования материала биопсии толстой и прямой кишки, полученного в результате эндоскопического исследования?": {
						Values:   []string{"Я не уверен"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "15",
					},
				},
				{ // I have questions
					"Какой был результат биопсии прямой и толстой кишки?": {
						Values:   []string{"Я не уверен"},
						Type:     "text",
						Compare:  "exact",
						Multiple: false,
						TestCase: "15",
					},
				},
			},
		},
	}
}
