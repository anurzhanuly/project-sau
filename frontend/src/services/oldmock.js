const mock = [
  {
    type: 'text',
    name: 'question1',
    title: 'Сколько вам лет? ',
    defaultValue: 45,
    inputType: 'number',
    min: 18,
    max: 99,
    step: 0
  },
  {
    type: 'checkbox',
    name: 'question2',
    title: 'Ваш пол ',
    choices: ['Женский', 'Мужской'],
    maxSelectedChoices: 1
  },
  {
    type: 'text',
    name: 'question3',
    title: 'Ваш рост',
    description: 'В сантиметрах',
    defaultValue: 165,
    inputType: 'number',
    min: 100,
    max: 220,
    step: 0
  },
  {
    type: 'text',
    name: 'question4',
    title: 'Ваш вес ',
    description: 'В килограммах',
    defaultValue: 70,
    inputType: 'number',
    min: 20,
    max: 200,
    step: 0
  },
  {
    type: 'checkbox',
    name: 'question5',
    title: 'У вас есть хроническое заболевание? ',
    description:
      'Например: диабет, заболевания сердца, кожи, легких, почек,  повышенное давление и другие ',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question6',
    visibleIf: "{question5} = ['Да']",
    title: 'Отметьте какие хронические заболевания у вас есть или были',
    description: 'Отметьте текущие и прошлые хронические заболевания',
    choices: [
      'Повышенное давление (гипертензия)',
      'Диабет второго типа',
      'Онкология',
      'Имешическая болезнь сердца',
      'Аутоиммунные заболевания',
      'Гепатит В',
      'Гепатит С',
      'Заболевание почек',
      'У меня нет и не было хронических заболевание'
    ],
    otherText: 'Другие (напишите) ',
    maxSelectedChoices: 7,
    selectAllText: 'Все '
  },
  {
    type: 'checkbox',
    name: 'question7',
    title: 'Есть ли хронические заболевания у ваших близких родственников? ',
    description: 'У бабушки/дедушки, мамы/папы, брата/сестры',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question8',
    visibleIf: "{question7} = ['Да']",
    title: 'Отметьте какие есть или были у них хронические заболевания',
    choices: [
      'Повышенное давление (гипертензия)',
      'Диабет второго типа ',
      'Онкология ',
      'Имешическая болезнь сердца',
      'Аутоиммунные заболевания',
      'Заболевание почек ',
      'Я не знаю или у них не было и нет хронических заболеваний'
    ],
    otherText: 'Другие (напишите) ',
    maxSelectedChoices: 7
  },
  {
    type: 'checkbox',
    name: 'question9',
    title: 'Вы знаете свое рабочее артериальное давление?  ',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question10',
    visibleIf: "{question9} = ['Да']",
    title: 'Укажите только ваше систолическое давление',
    description: 'К примеру если у вас 120/80, укажите только 120 в 100-129',
    choices: [
      '<100',
      '100-129',
      '130-139',
      '140-149',
      '150-159',
      '>160',
      'Я не знаю'
    ],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question11',
    title: 'Вы знаете свой уровень сахара в крови натощак?',
    description: 'Тест глюкозы в медицинских анализах',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question12',
    visibleIf: "{question11} = ['Да']",
    title: 'Укажите ваш уровень глюкозы в крови',
    description: 'В ммол/л',
    choices: ['< 7.8', '7.8 – 11.1', '> 11.1', 'Я не знаю'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question13',
    title: 'Вы знаете свой уровень гемоглобина?',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question14',
    visibleIf: "{question13} = ['Да'] and {question2} = ['Женский']",
    title: 'Укажите свой уровень гемоглобина в крови',
    description: 'В г/л (х10*9/л)',
    choices: ['< 115', '115 - 155', '> 155', 'Не знаю '],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question15',
    visibleIf: "{question2} = ['Мужской'] and {question13} = ['Да']",
    title: 'Укажите свой уровень гемоглобина в крови',
    description: 'В г/л (х10*9/л)',
    choices: ['< 135', '135 - 180', '> 180', 'Не знаю '],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question16',
    title: 'Вы употребляете алкоголь? ',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question17',
    visibleIf: "{question16} = ['Да']",
    title: 'Вы знаете сколько в среднем в неделю вы употребляете алкоголь? ',
    description:
      '1 пиво 500 мл - 2 единицы, 1 стакан вина - 1 единица, 40 грамм водки - 1 единица',
    choices: [
      '< 8 единиц алкоголя',
      '8 - 12 единиц алкоголя',
      '> 12 единиц алкоголя'
    ],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question18',
    title: 'Вы курите? ',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question19',
    visibleIf: "{question18} = ['Да']",
    title: 'Сколько сигарет в день вы курите? ',
    choices: ['< 5 штук', ' 5 - 9 штук', '10 - 19 штук', '> 20 штук'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question20',
    visibleIf: "{question18} = ['Да']",
    title: 'Сколько лет вы курите?',
    choices: ['< 1 года', '1 - 4 лет', '5 - 9 лет', '10 - 14 лет', '> 15 лет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question21',
    title: 'Вы раньше курили на постоянной основе? ',
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question22',
    visibleIf: "{question21} = ['Да']",
    title: 'Сколько лет вы курили перед тем как бросить курить?',
    choices: [
      '< 1 года',
      '1 - 4 года',
      '5 - 9 лет',
      '10 - 14 лет',
      '> 15 лет '
    ],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question23',
    title: 'Ваш уровень физической активности?',
    choices: [
      'Прогулка',
      'Активный спорт',
      'В основном сидячий, малоподвижный '
    ],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question24',
    title: 'Ваш рацион питания? ',
    choices: ['Больше фруктов и овощей', 'Больше мяса и жирной пищи'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'question25',
    title: 'У вас есть следующие жалобы? Отметьте все те, которые есть ',
    choices: [
      'Усталость',
      'Быстрая утомляемость',
      'Потеря веса',
      'Набор веса',
      'Потеря аппетита',
      'Повышенная температура > 37.0С',
      'Озноб',
      'Ночные потения',
      'Нет'
    ],
    noneText: 'Нет ',
    otherText: 'Другие (опишите) ',
    maxSelectedChoices: 8
  }
];

export default mock;