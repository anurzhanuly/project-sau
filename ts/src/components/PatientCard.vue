<template>
  <div>
    <h2 class="card-header">Карточка пациента:</h2>
    <div class="card-wrapper">
      <div class="card-column column-left">
        <div class="card-row">
          <div class="card-item">
            <p>Дата:</p>
            <p>{{ date.toLocaleDateString() }}</p>
          </div>
          <div class="card-item">
            <p>Пол:</p>
            <p>{{ answers["Ваш пол"][0] }}</p>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item">
            <p>Рост:</p>
            <p>{{ answers["Ваш рост"][0] }}</p>
          </div>
          <div class="card-item">
            <p>Вес:</p>
            <p>{{ answers["Ваш вес"][0] }}</p>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Жалобы:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Есть ли у Вас сейчас жалобы?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Какие у Вас основные жалобы?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'На протяжении какого времени Вы испытываете подобные симптомы?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers['Становится ли вам лучше?']"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Семейные заболевания:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Какие хронические заболевания есть/были у ваших близких родственников (родители, дети, братья/сестры)'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте какие заболевания печени у есть/были у ваших близких родственников?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте какие онкологические заболевания есть/были у ваших близких родственников?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте какие респираторные заболевания есть/были у ваших близких родственников?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Медикаменты:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Принимаете ли Вы сейчас какие-то лекарства?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Какие лекарства Вы принимаете'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
          <div class="card-item__list">
            <p>Аллергии:</p>
            <ul>
              <li
                v-for="(answer, index) in answers['Есть ли у Вас аллергия?']"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Укажите на что у вас аллергия'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Обзор системных органов:</p>
            <ul>
              <li>
                Общее состояние:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы общего состояния'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Кожная система:
                <span
                  v-for="(answer, index) in answers['Отметьте жалобы с кожей']"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Нервная система:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы в области головы'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Дыхательная система:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с дыханием'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Сердечно-сосудистая система:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с сердцем'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Желудочно-кишечный тракт:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с животом'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Мочеполовая система:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с половой системой'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Грудь (если женщина):
                <span
                  v-for="(answer, index) in answers['Отметьте жалобы с грудью']"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Опорно-двигательная система:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с мышцами'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Кровеносная система:
                <span
                  v-for="(answer, index) in answers['Отметьте жалобы с кровью']"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Эндокринная система:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с щитовидкой'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
              <li>
                Ментальное здоровье:
                <span
                  v-for="(answer, index) in answers[
                    'Отметьте жалобы с ментальным здоровьем'
                  ]"
                  :key="index"
                  >{{ answer || "" }},</span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Лабораторные исследования:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Проводился ли Вам анализ на ПСА (простатический специфический антиген)'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers['Результаты анализа на ПСА']"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Сдавали ли Вы анализ кала с использованием гваяковой кислоты или фекального иммунохимического анализа на скрытую кровь?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-column column-right">
        <div class="card-row">
          <div class="card-item">
            <p>Возраст:</p>
            <p>{{ answers["Сколько Вам полных лет?"][0] }}</p>
          </div>
          <div class="card-item">
            <p>Врач:</p>
            <p />
          </div>
        </div>
        <div class="card-row">
          <div class="card-item">
            <p>ИМТ:</p>
            <p>
              {{
                (
                  +answers["Ваш вес"][0] /
                    (+answers["Ваш рост"][0] * +answers["Ваш рост"][0]) +
                  ""
                ).slice(4, 6)
              }}
            </p>
          </div>
          <div class="card-item">
            <p>Давление:</p>
            <p>
              {{ answers["Укажите свое систолическое (верхнее) давление"][0] }}
            </p>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Сопутствующие заболевания:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте, какие хронические заболевания у вас есть или были'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте какие заболевания печени у Вас есть/были?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте какие онкологические заболевания у Вас есть/были?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Отметьте какие респираторные заболевания у Вас есть/были?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Операции:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Были ли у Вас какие-либо операции?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers['Какие у Вас были операции?']"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
          <div class="card-item__list">
            <p>Госпитализации:</p>
            <ul>
              <li
                v-for="(answer, index) in answers['Лежали ли Вы в больнице?']"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'По какому поводу Вы лежали в больнице?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Курение:</p>
            <ul>
              <li v-for="(answer, index) in answers['Вы курите?']" :key="index">
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Сколько пачек в день Вы курите?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers['Сколько лет Вы курите?']"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
          <div class="card-item__list">
            <p>Алкоголь:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Употребляете ли Вы алкоголь?'
                ]"
                :key="index"
              >
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Возможные риски:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Получали ли Вы лучевую терапию на грудь в возрасте 10-30 лет?'
                ]"
                :key="index"
              >
                Получали ли Вы лучевую терапию на грудь в возрасте 10-30 лет?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Делали ли Вы прививку от вируса папилломы человека?'
                ]"
                :key="index"
              >
                Делали ли Вы прививку от вируса папилломы человека?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Делали ли Вы ранее скрининг на рак шейки матки?'
                ]"
                :key="index"
              >
                Делали ли Вы ранее скрининг на рак шейки матки?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Были ли последние два скрининга отрицательными?'
                ]"
                :key="index"
              >
                Были ли последние два скрининга отрицательными?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'У вас низкая физическая активность? У вас сидячий образ жизни?'
                ]"
                :key="index"
              >
                У вас низкая физическая активность? У вас сидячий образ жизни?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Относится ли к вам что-либо из нижеперечисленного?'
                ]"
                :key="index"
              >
                Относится ли к вам что-либо из нижеперечисленного?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Проходили ли вы полный курс вакцинации (3 дозы) от гепатита В во взрослом возрасте?'
                ]"
                :key="index"
              >
                Проходили ли вы полный курс вакцинации (3 дозы) от гепатита В во
                взрослом возрасте?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Вам диагностировали двусторонний стеноз сонных артерий?'
                ]"
                :key="index"
              >
                Вам диагностировали двусторонний стеноз сонных артерий?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Вам диагностировали открытое овальное окно?'
                ]"
                :key="index"
              >
                Вам диагностировали открытое овальное окно?
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-row">
          <div class="card-item__list">
            <p>Инструментальные исследования:</p>
            <ul>
              <li
                v-for="(answer, index) in answers[
                  'Проходили ли Вы УЗИ органов брюшной полости последние 6 месяцев?'
                ]"
                :key="index"
              >
                Проходили ли Вы УЗИ органов брюшной полости последние 6 месяцев?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Какие были результаты УЗИ органов брюшной области?'
                ]"
                :key="index"
              >
                Какие были результаты УЗИ органов брюшной области?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Проводилось ли Вам пато-морфологическое исследование (биопсия) простаты?'
                ]"
                :key="index"
              >
                Проводилось ли Вам пато-морфологическое исследование (биопсия)
                простаты?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Были ли подтвержден диагноз рак предстательной железы?'
                ]"
                :key="index"
              >
                Были ли подтвержден диагноз рак предстательной железы?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Делали ли Вам тотальную колоноскопию?'
                ]"
                :key="index"
              >
                Делали ли Вам тотальную колоноскопию?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Была ли обнаружена патология в результате исследования материала биопсии толстой и прямой кишки, полученного в результате эндоскопического исследования?'
                ]"
                :key="index"
              >
                Была ли обнаружена патология в результате исследования материала
                биопсии толстой и прямой кишки, полученного в результате
                эндоскопического исследования?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Какой был результат биопсии прямой и толстой кишки?'
                ]"
                :key="index"
              >
                Какой был результат биопсии прямой и толстой кишки?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Проходили ли Вы колоноскопию?'
                ]"
                :key="index"
              >
                Проходили ли Вы колоноскопию?
                {{ answer || "" }}
              </li>
              <li
                v-for="(answer, index) in answers[
                  'Была ли обнаружена патология в результате эндоскопического исследования?'
                ]"
                :key="index"
              >
                Была ли обнаружена патология в результате эндоскопического
                исследования?
                {{ answer || "" }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useSurveyStore } from "../stores/surveyStore";

const surveyStore = useSurveyStore();

const answers = computed(() => surveyStore.resultAnswers || {});
const date = ref(new Date());
</script>

<style scoped>
.card-header {
  margin-bottom: 40px;
}

.card-wrapper {
  display: flex;
}

.card-column {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid #222222;
  border-bottom: 1px solid #222222;
}

.column-right {
  border-right: 1px solid #222222;
}

.card-row {
  display: flex;
  border-top: 1px solid #222222;
}

.card-item {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #222222;
}

.card-item p:first-child {
  margin-right: 10px;
  text-decoration: underline;
}

.card-item__list {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #222222;
  padding: 20px;
  width: 100%;
}

.card-item__list p:first-child {
  margin-bottom: 10px;
  text-decoration: underline;
}

.card-row .card-item:last-child,
.card-row .card-item__list:last-child {
  border-right: 0;
}
</style>
