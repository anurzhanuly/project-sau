const mock = [
  {
    id: 1,
    type: 'text',
    name: 'question1',
    title: 'Сколько вам лет? ',
    inputType: 'number',
    min: 18,
    max: 99,
    step: 0,
  },
  {
    id: 2,
    type: 'checkbox',
    name: 'question2',
    title: 'Ваш пол ',
    choices: [
      'женский',
      'мужской',
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 3,
    type: 'text',
    name: 'question3',
    title: 'Ваш рост',
    description: 'в сантиметрах ',
    inputType: 'number',
    min: 100,
    max: 220,
  },
  {
    id: 4,
    type: 'text',
    name: 'question4',
    title: 'Ваш вес ',
    description: 'в килограммах ',
    inputType: 'number',
    min: 20,
    max: 200,
  },
  {
    id: 5,
    type: 'boolean',
    name: 'question5',
    title: 'У вас есть хроническое заболевание? ',
    description: 'например: диабет, заболевания сердца, кожи, легких, почек,  повышенное давление и другие ',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 6,
    type: 'checkbox',
    name: 'question6',
    visibleIf: '{question5} = false',
    title: 'Отметьте какие хронические заболевания есть или были',
    description: 'Отметьте текущие и прошлые хронические заболевания',
    choices: [
      {
        value: 'item1',
        text: 'повышенное давление (гипертензия)',
      },
      {
        value: 'item2',
        text: 'диабет второго типа ',
      },
      {
        value: 'item3',
        text: 'онкология ',
      },
      {
        value: 'item4',
        text: 'имешическая болезнь сердца',
      },
      {
        value: 'item5',
        text: 'аутоиммунные заболевания',
      },
      {
        value: 'item6',
        text: 'гепатит В ',
      },
      {
        value: 'item7',
        text: 'гепатит С ',
      },
      {
        value: 'item8',
        text: 'заболевание почек ',
      },
      {
        value: 'item9',
        text: 'У меня нет и не было хронических заболевание',
      },
    ],
    hasOther: true,
    otherText: 'Другие (напишите) ',
    maxSelectedChoices: 9,
    selectAllText: 'Все ',
  },
  {
    id: 7,
    type: 'boolean',
    name: 'question7',
    title: 'Есть ли хронические заболевания у ваших близких родственников? ',
    description: 'У бабушки/дедушки, мама/папа, братья/сестры',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 8,
    type: 'checkbox',
    name: 'question8',
    visibleIf: '{question7} = false',
    title: 'Если да, то отметьте какие есть или были у них хронические заболевания',
    choices: [
      {
        value: 'item1',
        text: 'повышенное давление (гипертензия)',
      },
      {
        value: 'item2',
        text: 'диабет второго типа ',
      },
      {
        value: 'item3',
        text: 'онкология ',
      },
      {
        value: 'item4',
        text: 'имешическая болезнь сердца',
      },
      {
        value: 'item5',
        text: 'аутоиммунные заболевания',
      },
      {
        value: 'item6',
        text: 'заболевание почек ',
      },
      {
        value: 'item7',
        text: 'Я не знаю или у них не было и нет хронических заболеваний',
      },
    ],
    hasOther: true,
    otherText: 'Другие (напишите) ',
    maxSelectedChoices: 9,
  },
  {
    id: 9,
    type: 'boolean',
    name: 'question9',
    title: 'Вы знаете свое рабочее артериальное давление?  ',
    description: 'Систолическое ',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 10,
    type: 'checkbox',
    name: 'question10',
    visibleIf: '{question9} = false',
    title: 'Укажите в какое значение относится ваше систолическое давление (первое значение)',
    description: 'К примеру если у вас 120/80, укажите только 120 в 100-129',
    choices: [
      {
        value: 'item1',
        text: '<100',
      },
      {
        value: 'item2',
        text: '100-129',
      },
      {
        value: 'item3',
        text: '130-139',
      },
      {
        value: 'item4',
        text: '140-149',
      },
      {
        value: 'item5',
        text: '150-159',
      },
      {
        value: 'item6',
        text: '>160',
      },
      {
        value: 'item7',
        text: 'Я не знаю  ',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 11,
    type: 'boolean',
    name: 'question11',
    title: 'Вы знаете свой уровень сахара в крови натощак?',
    description: 'Анализ глюкозы в лабораторных анализах',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 12,
    type: 'checkbox',
    name: 'question12',
    visibleIf: '{question11} = false',
    title: 'Укажите ваш уровень глюкозы в крови ',
    description: 'В ммол/л',
    choices: [
      {
        value: 'item1',
        text: '< 7.8 ',
      },
      {
        value: 'item2',
        text: '7.8 – 11.1',
      },
      {
        value: 'item3',
        text: '> 11.1',
      },
      {
        value: 'item4',
        text: 'Я не знаю ',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 13,
    type: 'boolean',
    name: 'question13',
    title: 'Вы знаете свой уровень гемоглобина?',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 14,
    type: 'checkbox',
    name: 'question14',
    visibleIf: "{question13} = false and {question2} = ['женский']",
    title: 'Укажите свой уровень гемоглобина в крови',
    description: 'В г/л (х10*9/л)',
    choices: [
      {
        value: 'item1',
        text: '< 115',
      },
      {
        value: 'item2',
        text: '115 - 155',
      },
      {
        value: 'item3',
        text: '> 155',
      },
      {
        value: 'item4',
        text: 'Не знаю ',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 15,
    type: 'checkbox',
    name: 'question25',
    visibleIf: "{question2} = ['мужской'] and {question13} = false",
    title: 'Укажите свой уровень гемоглобина в крови',
    description: 'В г/л (х10*9/л)',
    choices: [
      {
        value: 'item1',
        text: '< 135',
      },
      {
        value: 'item2',
        text: '135 - 180',
      },
      {
        value: 'item3',
        text: '> 180',
      },
      {
        value: 'item4',
        text: 'Не знаю ',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 16,
    type: 'boolean',
    name: 'question15',
    title: 'Вы употребляете алкоголь? ',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 17,
    type: 'checkbox',
    name: 'question16',
    visibleIf: '{question15} = false',
    title: 'Вы знаете сколько в среднем в неделю вы употребляете алкоголь? ',
    description: '1 пиво 500 мл - 2 единицы, 1 стакан вина - 1 единица, 40 грамм водки - 1 единица',
    choices: [
      {
        value: 'item1',
        text: '< 8',
      },
      {
        value: 'item2',
        text: '8 - 12',
      },
      {
        value: 'item3',
        text: '> 12',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 18,
    type: 'boolean',
    name: 'question17',
    title: 'Вы курите? ',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 19,
    type: 'checkbox',
    name: 'question18',
    visibleIf: '{question17} = false',
    title: 'Сколько сигарет в день вы курите? ',
    choices: [
      {
        value: 'item1',
        text: '< 5',
      },
      {
        value: 'item2',
        text: ' 5 - 9',
      },
      {
        value: 'item3',
        text: '10 - 19',
      },
      {
        value: 'item4',
        text: '> 20',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 20,
    type: 'checkbox',
    name: 'question19',
    visibleIf: '{question17} = false',
    title: 'Сколько вы курите?',
    choices: [
      {
        value: 'item1',
        text: '< 1',
      },
      {
        value: 'item2',
        text: '1 - 4',
      },
      {
        value: 'item3',
        text: '5 - 9',
      },
      {
        value: 'item4',
        text: '> 10',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 21,
    type: 'boolean',
    name: 'question20',
    title: 'Вы раньше курили на постоянной основе? ',
    labelTrue: 'Нет',
    labelFalse: 'Да',
  },
  {
    id: 22,
    type: 'checkbox',
    name: 'question21',
    visibleIf: '{question20} = false',
    title: 'Как долго вы курили перед тем как бросить курить?',
    description: 'В лет ',
    choices: [
      {
        value: 'item1',
        text: '< 1 года',
      },
      {
        value: 'item2',
        text: '1 - 4',
      },
      {
        value: 'item3',
        text: '5 - 9',
      },
      {
        value: 'item4',
        text: '> 10',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 23,
    type: 'checkbox',
    name: 'question22',
    title: 'Ваш уровень физической активности?',
    choices: [
      {
        value: 'item1',
        text: 'Прогулка',
      },
      {
        value: 'item2',
        text: 'Активный спорт',
      },
      {
        value: 'item3',
        text: 'В основном сидячий, малоподвижный ',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 24,
    type: 'checkbox',
    name: 'question23',
    title: 'Ваш рацион питания? ',
    choices: [
      {
        value: 'item1',
        text: 'Полезный (больше фруктов и овощей)',
      },
      {
        value: 'item2',
        text: 'не полезный (больше мяса и жирного)',
      },
    ],
    maxSelectedChoices: 1,
  },
  {
    id: 25,
    type: 'checkbox',
    name: 'question24',
    title: 'У вас есть следующие общие жалобы? Отметьте которые есть ',
    choices: [
      {
        value: 'item1',
        text: 'Усталость',
      },
      {
        value: 'item2',
        text: 'Быстрая Утомляемость',
      },
      {
        value: 'item3',
        text: 'Потеря веса',
      },
      {
        value: 'item4',
        text: 'Набор веса',
      },
      {
        value: 'item5',
        text: '  Потеря аппетита',
      },
      {
        value: 'item6',
        text: 'Повышенная Температура > 37.0С',
      },
      {
        value: 'item7',
        text: 'Озноб',
      },
      {
        value: 'item8',
        text: 'Ночные потения',
      },
    ],
    hasOther: true,
    hasNone: true,
    noneText: 'Нет ',
    otherText: 'Другие (опишите) ',
    maxSelectedChoices: 8,
  },
];

export default mock;
