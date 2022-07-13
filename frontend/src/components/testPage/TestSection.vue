<template>
  <section class="section-test">
    <div class="test-wrapper">
      <p class="test-title">{{ questions[idx]["title"] }}</p>
      <div v-if="questions[idx].choices">
        <label
          v-for="(answer, index) in questions[idx].choices"
          :for="index"
          :key="index"
          class="label"
        >
          <input
            :id="index"
            type="radio"
            class="hidden"
            :value="index"
            @change="answered($event)"
          />
          {{ answer }}
        </label>
      </div>
      <div
        class="test-button"
        @click="nextQuestion"
        @keydown.enter="nextQuestion"
      >
        <button class="btn">Следующий вопрос</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import mock from "../../services/mock";
import { ref } from "vue";

const questions = ref(mock);
const idx = ref(0);

const nextQuestion = () => {
  idx.value += 1;
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
  display: none;
}

.label {
  display: block;
  border: 1px solid #879aac;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  font-weight: 400;
}

.test-button {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn {
  width: 150px;
  padding: 10px;
}
</style>
