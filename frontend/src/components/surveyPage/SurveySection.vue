<template>
  <section class="section-test">
    <div class="test-wrapper">
      <p class="test-title">{{ questions[idx]['title'] }}</p>
      <p class="test-description">{{ questions[idx]['description'] }}</p>
      <div
        v-if="questions[idx].choices && questions[idx].maxSelectedChoices > 1"
      >
        <label
          v-for="(answer, index) in questions[idx].choices"
          :for="index"
          :key="index"
          class="label"
          :class="{ checked: checked.includes(answer) }"
        >
          <input
            :id="index"
            type="checkbox"
            class="hidden"
            :value="answer"
            v-model="checked"
          />
          {{ answer }}
        </label>
      </div>
      <div
        v-if="questions[idx].choices && questions[idx].maxSelectedChoices === 1"
      >
        <label
          v-for="(answer, index) in questions[idx].choices"
          :for="index"
          :key="index"
          class="label"
          :class="{ checked: checked.includes(answer) }"
        >
          <input
            :id="index"
            type="radio"
            class="hidden"
            :value="answer"
            v-model="checked"
          />
          {{ answer }}
        </label>
      </div>
      <div v-if="questions[idx].inputType === 'number'">
        <div class="number-input-container">
          <button
            class="button-decrement btn-input"
            @click="inputValue > minValue ? (inputValue -= 1) : null"
          ></button>
          <div class="number-input">
            <input
              type="number"
              :min="minValue"
              :max="maxValue"
              v-model="inputValue"
              @change="validateInput()"
            />
          </div>
          <button
            class="button-increment btn-input"
            @click="inputValue < maxValue ? (inputValue += 1) : null"
          ></button>
        </div>
        <p class="input-help">Нажмите на цифру для ручного ввода</p>
      </div>
    </div>
    <div class="test-buttons" v-if="width > 770">
      <button class="btn prev-btn" @click="prevQuestion" v-if="idx > 0">
        Предыдущий вопрос
      </button>
      <button
        class="btn"
        @click="nextQuestion"
        :disabled="!checked.length && questions[idx].choices"
        v-if="idx < questions.length - 1"
      >
        Следующий вопрос
      </button>
      <RouterLink to="/result" v-else>
        <button class="btn" @click="lastQuestion">Показать результаты</button>
      </RouterLink>
    </div>
    <div class="test-buttons" v-else>
      <button
        class="arrow prev-btn"
        @click="prevQuestion"
        v-if="idx > 0"
      ></button>
      <button
        class="arrow"
        @click="nextQuestion"
        :disabled="!checked.length && questions[idx].choices"
        v-if="idx < questions.length - 1"
      ></button>
      <RouterLink to="/result" v-else>
        <button class="btn mobile-btn" @click="lastQuestion">Результаты</button>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import mock from '../../services/mock';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useSurveyStore } from '../../stores/survey.js';

const questions = ref(mock);
const idx = ref(0);
const surveyStore = useSurveyStore();
const checked = ref([]);
const selectedAnswers = ref({});
const minValue = ref(questions.value[0].min);
const maxValue = ref(questions.value[0].max);
const inputValue = ref(questions.value[0].defaultValue);
const width = ref(null);

onMounted(() => {
  const updateWidth = () => {
    width.value = window.innerWidth;
  };
  window.addEventListener('resize', updateWidth);
  updateWidth();
});

const changeInputValue = () => {
  minValue.value = questions.value[idx.value].min;
  maxValue.value = questions.value[idx.value].max;
  inputValue.value = questions.value[idx.value].defaultValue;
};

const validateInput = () => {
  if (inputValue.value > maxValue.value) {
    inputValue.value = maxValue.value;
  }
  if (inputValue.value < minValue.value) {
    inputValue.value = minValue.value;
  }
};

const collectAnswers = () => {
  if (
    questions.value[idx.value].choices &&
    questions.value[idx.value].maxSelectedChoices === 1
  ) {
    selectedAnswers.value[idx.value + 1] = [checked.value].flat(Infinity);
  } else if (
    questions.value[idx.value].choices &&
    questions.value[idx.value].maxSelectedChoices > 1
  ) {
    selectedAnswers.value[idx.value + 1] = [...checked.value];
  } else {
    selectedAnswers.value[idx.value + 1] = [`${inputValue.value}`];
  }
};

const checkVisible = () => {
  const objValues = {};
  const arrVisibility = [];

  const arrValues = questions.value[idx.value].visibleIf
    .split(' ')
    .map((el) => {
      if (el.includes('{')) {
        return +el.replace(/[\D]+/g, '');
      }
      if (el.includes('[')) {
        return el.slice(2, el.length - 2);
      }
    })
    .filter((el) => el);

  for (let i = 0; i < arrValues.length; i++) {
    if (Number.isInteger(arrValues[i])) {
      objValues[arrValues[i]] = arrValues[i + 1];
    }
  }

  for (let key in objValues) {
    if (selectedAnswers.value[key].includes(objValues[key])) {
      arrVisibility.push(true);
    } else {
      arrVisibility.push(false);
    }
  }

  if (arrVisibility.includes(false)) {
    return false;
  }

  return true;
};

const skipQuestion = () => {
  const isVisible = checkVisible();

  if (!isVisible) {
    idx.value += 1;
    delete selectedAnswers.value[idx.value];
    if (questions.value[idx.value].visibleIf) {
      skipQuestion();
    }
  }
};

const nextQuestion = () => {
  collectAnswers();

  idx.value += 1;

  if (questions.value[idx.value].min) {
    changeInputValue();
  }

  if (questions.value[idx.value].visibleIf) {
    skipQuestion();
  }

  if (selectedAnswers.value[idx.value + 1]) {
    checked.value = [...selectedAnswers.value[idx.value + 1]];
  } else {
    checked.value = [];
  }
};

const prevQuestion = () => {
  while (!selectedAnswers.value[idx.value]) {
    idx.value -= 1;
  }
  checked.value = [...selectedAnswers.value[idx.value]];
  inputValue.value = +selectedAnswers.value[idx.value][0];
  idx.value -= 1;
};

const lastQuestion = () => {
  collectAnswers();
  surveyStore.$patch({
    resultAnswers: {
      answers: selectedAnswers.value
    }
  });
};
</script>

<style scoped>
.section-test {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 80px;
  margin: 40px auto;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.test-wrapper {
  display: flex;
  flex-direction: column;
}

.test-title {
  font-size: 26px;
  line-height: 34px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}

.test-description {
  margin: 0 auto;
  margin-bottom: 30px;
  color: #acb7c1;
}

.hidden {
  visibility: hidden;
  position: absolute;
  right: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.label {
  display: block;
  border: 1px solid #879aac;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  font-weight: 400;
  cursor: pointer;
}

.checked {
  background: #689be7;
  color: #fff;
}

.checked::before {
  content: '✔';
}

.test-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}

.btn {
  background-color: #ffffff;
  border: 1px solid #222222;
  border-radius: 8px;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  outline: none;
  padding: 13px 23px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: 220px;
}

.btn:focus-visible {
  box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
  transition: box-shadow 0.2s;
}

.btn:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

.btn:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}

.prev-btn {
  margin-right: auto;
}

.mobile-btn {
  width: 120px;
  padding: 13px;
}

.arrow {
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 3px solid;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
}

.arrow:after {
  content: '';
  display: inline-block;
  margin-top: 5px;
  margin-left: -6px;
  width: 22.4px;
  height: 22.4px;
  border-top: 4px solid;
  border-right: 4px solid;
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.prev-btn.arrow:after {
  margin-left: 10px;
  -moz-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.number-input-container {
  max-width: 400px;
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 48px auto 48px;
  margin: 30px auto;
}

.number-input {
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fcf9ed;
  overflow: hidden;
}

.input-help {
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #acb7c1;
}

input[type='number'] {
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  width: 100%;
  min-width: 100%;
  background-color: #fcf9ed;
  border: 1px solid #ede6d9;
  border-left: 1px solid rgba(0, 0, 0, 0);
  border-right: 1px solid rgba(0, 0, 0, 0);
  border-radius: none;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  font-weight: 700;
  transition: all 0.2s ease-out;
}

input[type='number']:focus {
  background-color: white;
  border: 1px solid #9c7830;
  outline: none;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}

.btn-input {
  position: relative;
  height: 100%;
  margin-top: 32px;
  padding: 12px 16px;
  background-color: #fcf9ed;
  border: 1px solid #ede6d9;
  border-radius: none;
  transition: all 0.1s ease-out;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-transform: scale(1);
  transform: scale(1);
  margin: 0;
}

.btn-input:active,
.btn-input:focus {
  outline: none;
}

.btn-input::after {
  content: '';
  position: absolute;
  opacity: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: inherit;
  background-position: center;
  background-repeat: no-repeat;
}

.button-decrement::after {
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 12H7' stroke='%23112C34' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

.button-increment::after {
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 7V17' stroke='%23112C34' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17 12H7' stroke='%23112C34' stroke-width='2' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
}

.button-decrement {
  border-right: none;
}

.button-increment {
  border-left: none;
}

@media (hover: hover) {
  input[type='number']:hover,
  .btn-input:hover {
    background-color: white;
  }

  .btn-input:active {
    background-color: #fcf9ed;
    transform: translateY(1px);
  }
}

@media (hover: none) {
  .btn-input:active {
    background-color: white;
    transform: translateY(1px);
  }
}
@media (max-width: 480px) {
  .btn {
    font-size: 14px;
    line-height: 18px;
    margin: 5px 0;
  }

  .section-test {
    padding: 50px 30px;
  }
}

@media (max-width: 768px) {
  .test-title {
    font-size: 22px;
  }

  .btn {
    margin: 5px 0;
  }

  .desktop-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
