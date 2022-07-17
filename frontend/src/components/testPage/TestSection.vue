<template>
  <section class="section-test">
    <div class="test-wrapper">
      <p class="test-title">{{ questions[idx]["title"] }}</p>
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
      <span>{{ selectedAnswers }}</span>
      <div v-if="questions[idx].inputType === 'number'">
        <input
          type="range"
          :min="minValue"
          :max="maxValue"
          v-model="rangeValue"
          class="input-range"
        />
      </div>
      <div
        class="test-control"
        @click="nextQuestion"
        @keydown.enter="nextQuestion"
      >
        <span v-if="questions[idx].inputType === 'number'" class="input-number">
          {{ rangeValue }}
        </span>
        <button class="btn">Следующий вопрос</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import mock from "../../services/mock";
import { ref, watch } from "vue";

const questions = ref(mock);
const idx = ref(0);

const minValue = ref(questions.value[idx.value].min);
const maxValue = ref(questions.value[idx.value].max);
const rangeValue = ref(`${Math.round(maxValue.value / 2)}`);

watch(idx, () => {
  if (questions.value[idx.value].min) {
    minValue.value = questions.value[idx.value].min;
    maxValue.value = questions.value[idx.value].max;
    rangeValue.value = `${Math.round(maxValue.value / 2)}`;
  }
});

const checked = ref([]);
const selectedAnswers = ref({});

const collectAnswers = () => {
  if (
    questions.value[idx.value].choices &&
    questions.value[idx.value].maxSelectedChoices === 1
  ) {
    selectedAnswers.value[idx.value + 1] = [checked.value];
  } else if (
    questions.value[idx.value].choices &&
    questions.value[idx.value].maxSelectedChoices > 1
  ) {
    selectedAnswers.value[idx.value + 1] = [...checked.value];
  } else {
    selectedAnswers.value[idx.value + 1] = [rangeValue.value];
  }
};

const nextQuestion = () => {
  collectAnswers();

  idx.value += 1;
  if (checked.value.length && questions.value[idx.value].visibleIf) {
    if (!questions.value[idx.value].visibleIf.includes(checked.value[0])) {
      idx.value += 1;
    }
  }

  checked.value = [];
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
  margin-bottom: 30px;
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

.test-control {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  align-items: center;
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
    "Helvetica Neue", sans-serif;
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
  width: auto;
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

.input-number {
  margin-right: auto;
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  font-weight: 700;
}

.input-range {
  -webkit-appearance: none;
  width: 100%;
  margin: 60px 0;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.input-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #689be7;
  cursor: pointer;
}

.input-range::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #689be7;
  cursor: pointer;
}
</style>
