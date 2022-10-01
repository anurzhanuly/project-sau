const mock = [
  {
    type: 'text',
    name: 'Сколько Вам полных лет?',
    title: 'Сколько Вам полных лет?',
    inputType: 'number',
    defaultValue: 35,
    isRequired: true,
    min: 18,
    max: 99,
    step: 0
  },
  {
    type: 'checkbox',
    name: 'Ваш пол',
    title: 'Ваш пол',
    isRequired: true,
    choices: ['Мужской', 'Женский', 'Предпочитаю не отвечать/другое'],
    maxSelectedChoices: 1
  },
  {
    type: 'text',
    name: 'Ваш рост (см)',
    title: 'Ваш рост (см)',
    defaultValue: 165,
    isRequired: true,
    inputType: 'number',
    min: 70,
    max: 220,
    step: 1
  },
  {
    type: 'text',
    name: 'Ваш вес (кг)',
    title: 'Ваш вес (кг)',
    defaultValue: 70,
    isRequired: true,
    inputType: 'number',
    min: 20,
    max: 200,
    step: 1
  },
  {
    type: 'checkbox',
    name: 'На протяжении какого времени Вы испытываете подобные симптомы?',
    title: 'На протяжении какого времени Вы испытываете подобные симптомы?',
    isRequired: true,
    choices: [
      'День',
      'Несколько дней',
      'Несколько недель',
      'Несколько месяцев',
      'Полгода',
      'Год',
      'Несколько лет'
    ],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'Становится ли Вам лучше?',
    choices: ['Лучше', 'Хуже', 'Одинаково'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'Укажите свое систолическое (верхнее) давление',
    isRequired: true,
    choices: [
      '<100',
      '100-119',
      '120-129',
      '130-139',
      '140-149',
      '150-159',
      'Больше 160'
    ],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'Вы сейчас беременны?',
    visibleIf: "{Ваш биологический пол} = ['Женский']",
    title: 'Вы сейчас беременны?',
    isRequired: true,
    choices: ['Нет', 'Не знаю', 'Наступила менопауза'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'В каком возрасте у Вас начались месячные? (полных лет)',
    visibleIf: "{Ваш биологический пол} = ['Женский']",
    title: 'В каком возрасте у Вас начались месячные? (полных лет)',
    isRequired: true,
    choices: ['До 11 лет', '12-13', 'Старше 14'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие хронические заболевания у вас есть или были',
    title: 'Отметьте какие хронические заболевания у вас есть или были',
    isRequired: true,
    choices: [
      '(АГ) артериальная гипертензия / повышенное давление',
      'Гиперлипидемия/атеросклероз',
      'Онкологические заболевания',
      'Ишемическая болезнь сердца',
      'Заболевания печени',
      'Заболевания органов дыхания',
      'Перенесенный инфаркт миокарда',
      'ВИЧ или СПИД',
      'Аутоиммунные заболевания',
      'Фибрилляция предсердий',
      'Семейный аденоматозный полипоз (FAP)'
    ],
    separateSpecialChoices: true,
    hasOther: true,
    hasNone: true,
    noneText: 'У меня нет известных мне хроничеких заболеваний',
    otherText: 'Другое ',
    maxSelectedChoices: 15
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие заболевания печени у Вас есть/были?',
    visibleIf:
      "{Отметьте какие хронические заболевания у вас есть или были} = ['Заболевания печени']",
    title: 'Отметьте какие заболевания печени у Вас есть/были?',
    requiredIf:
      "{Отметьте какие хронические заболевания у вас есть или были} = ['Заболевания печени']",
    choices: [
      'Гепатит В',
      'Гепатит С',
      'Рак печени',
      'Цирроз печени',
      'Гепатит А',
      'Гепатит Е',
      'Гемохроматоз',
      'Неалкогольная жировая болезнь печени',
      'Дефицит альфа-1-антитрипсина'
    ],
    hasOther: true,
    otherText: 'Другое',
    maxSelectedChoices: 14
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие онкологические заболевания у Вас есть/были?',
    visibleIf:
      "{Отметьте какие хронические заболевания у вас есть или были} contains ['Онкологические заболевания']",
    title: 'Отметьте какие онкологические заболевания у Вас есть/были?',
    choices: [
      'Рак легких',
      'Рак печени',
      'Рак молочных желез',
      'Колоректальный рак'
    ],
    maxSelectedChoices: 16
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие респираторные заболевания у Вас есть/были?',
    visibleIf:
      "{Отметьте какие хронические заболевания у вас есть или были} contains ['Заболевания органов дыхания']",
    isRequired: true,
    choices: [
      'ХОБЛ (Хроническая обструктивная легочная болезнь)',
      'Хронический бронхит',
      'Эмфизема',
      'Бронхиальная астма'
    ],
    hasOther: true,
    otherText: 'Другое',
    maxSelectedChoices: 14
  },
  {
    type: 'checkbox',
    name: 'Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)',
    title:
      'Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)',
    isRequired: true,
    choices: [
      '(АГ) артериальная гипертензия / повышенное давление',
      'Сахарный диабет',
      'Онкологические заболевания',
      'Ишемическая болезнь сердца',
      'Заболевания почек',
      'Заболевания печени',
      'Заболевания органов дыхания',
      'Перенесенный инсульт',
      'Инфаркт миокарда, перенесенный до 60 лет',
      'Воспалительное заболевание кишечника (ВЗК)',
      'Семейный аденоматозный полипоз (FAP)',
      'Синдром Линча (наследственный неполипозный рак толстой кишки)'
    ],
    separateSpecialChoices: true,
    hasOther: true,
    hasNone: true,
    noneText: 'Я не знаю о хронических заболеваниях моих близких родственников',
    otherText: 'Другое ',
    maxSelectedChoices: 15
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие заболевания печени у есть/были у ваших близких родственников?',
    visibleIf:
      "{Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)} contains ['Заболевания печени']",
    title:
      'Отметьте какие заболевания печени  есть/были у ваших близких родственников?',
    requiredIf:
      "{Отметьте какие хронические заболевания у вас есть или были} = ['Заболевания печени']",
    choices: [
      'Гепатит В',
      'Гепатит С',
      'Рак печени',
      'Цирроз печени',
      'Гепатит А',
      'Гепатит Е'
    ],
    hasOther: true,
    otherText: 'Другое',
    maxSelectedChoices: 15
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие онкологические заболевания есть/были у ваших близких родственников?',
    visibleIf:
      "{Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)} contains ['Онкологические заболевания']",
    title:
      'Отметьте какие онкологические заболевания есть/были у ваших близких родственников?',
    choices: [
      'Рак легких',
      'Рак печени',
      'Рак молочных желез',
      'Колоректальный рак'
    ],
    hasOther: true,
    otherText: 'Другое',
    maxSelectedChoices: 6
  },
  {
    type: 'checkbox',
    name: 'Отметьте какие респираторные заболевания есть/были у ваших близких родственников?',
    visibleIf:
      "{Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)} contains ['Заболевания органов дыхания']",
    isRequired: true,
    choices: [
      'ХОБЛ (Хроническая обструктивная легочная болезнь)',
      'Хронический бронхит',
      'Эмфизема',
      'Бронхиальная астма'
    ],
    hasOther: true,
    otherText: 'другое',
    maxSelectedChoices: 14
  },
  {
    type: 'checkbox',
    name: 'Вы курите?',
    title: 'Вы курите?',
    isRequired: true,
    choices: ['Да', 'Нет'],
    maxSelectedChoices: 1
  },
  {
    type: 'checkbox',
    name: 'Сколько пачек в день Вы курите?',
    visibleIf: "{Вы курите?} = ['Да']",
    title: 'Сколько пачек в день Вы курите?',
    isRequired: true,
    choices: ['Меньше 1 пачки', '1 пачка', '2 пачки', '3 пачки и больше'],
    maxSelectedChoices: 1
  }
];

export default mock;
