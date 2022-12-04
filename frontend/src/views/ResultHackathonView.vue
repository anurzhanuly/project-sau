<template>
  <section class="section-result">
    <div class="result-hack">
      <div class="result-hack-item">
        <h3>Жалобы при поступлении</h3>
        <p-textarea v-model="firstArea" cols="60" rows="5" />
      </div>
      <div class="result-hack-item">
        <h3>Анамнез заболевания</h3>
        <p-textarea v-model="secArea" cols="60" rows="5" />
      </div>
      <div class="result-hack-item">
        <h3>Анамнез жизни</h3>
        <p-textarea v-model="thirdArea" cols="60" rows="6" />
      </div>
      <div class="result-hack-item">
        <h3>Аллергологический анамнез</h3>
        <p-textarea v-model="fourthArea" cols="60" rows="5" />
      </div>
      <div class="result-hack-item">
        <h3>Объективные данные</h3>
        <p-textarea v-model="fifthArea" cols="60" rows="8" />
      </div>
    </div>
    <p-button
      label="Сохранить"
      class="p-button-raised p-button-success p-button-text"
    />
  </section>
</template>

<script lang="ts" setup>
import { useSurveyStore } from "../stores/surveyStore";
import { ref, computed } from "vue";
import PTextarea from "primevue/textarea";
import PButton from "primevue/button";

const surveyStore = useSurveyStore();
const answers = computed(() => surveyStore.resultAnswers || {});

const firstArea = ref("");
const secArea = ref("");
const thirdArea = ref("");
const fourthArea = ref("");
const fifthArea = ref("");

if (answers.value["Есть ли у вас сейчас жалобы?"].includes("Да")) {
  firstArea.value = `${
    answers.value["Какие у Вас основные жалобы?"]?.join(",") || ""
  }`;
  secArea.value = `На протяжении ${
    answers.value[
      "На протяжении какого времени Вы испытываете подобные симптомы?"
    ]?.join(",") || ""
  } становится ${answers.value["Становится ли Вам лучше?"]?.join(",") || ""}`;
} else {
  firstArea.value = "Жалобы не указал";
}

thirdArea.value = `Хронические заболевания: ${
  answers.value[
    "Отметьте, какие хронические заболевания у вас есть или были"
  ]?.join(",") || ""
} ${
  answers.value["Отметьте какие заболевания печени у Вас есть/были?"]?.join(
    ",",
  ) || ""
} ${
  answers.value[
    "Отметьте какие онкологические заболевания у Вас есть/были?"
  ]?.join(",") || ""
} ${
  answers.value[
    "Отметьте какие респираторные заболевания у Вас есть/были?"
  ]?.join(",") || ""
}
Госпитализации: ${answers.value["Лежали ли Вы в больнице?"]?.join(",") || ""} ${
  answers.value["По какому поводу Вы лежали в больнице?"]?.join(",") || ""
}
Операции: ${
  answers.value["Были ли у Вас какие-либо операции?"]?.join(",") || ""
} ${answers.value["Какие у Вас были операции?"]?.join(",") || ""}
Курение: ${answers.value["Вы курите?"]?.join(",") || ""} ${
  answers.value["Сколько пачек в день Вы курите?"]?.join(",") || ""
} ${answers.value["Сколько лет Вы курите?"]?.join(",") || ""}
Алкоголь: ${answers.value["Употребляете ли Вы алкоголь?"]?.join(",") || ""}`;

fourthArea.value = `${
  answers.value["Есть ли у Вас аллергия?"]?.join(",") || ""
} ${answers.value["Укажите на что у вас аллергия"]?.join(",") || ""}`;

fifthArea.value = `Общее состояние: ${
  answers.value["Отметьте жалобы общего состояния"]?.join(",") || ""
}
Кожная система: ${answers.value["Отметьте жалобы с кожей"]?.join(",") || ""}
Нервная система: ${
  answers.value["Отметьте жалобы в области головы"]?.join(",") || ""
}
Дыхательная система: ${
  answers.value["Отметьте жалобы с дыханием"]?.join(",") || ""
}
Сердечно-сосудистая система: ${
  answers.value["Отметьте жалобы с сердцем"]?.join(",") || ""
}
Желудочно-кишечный тракт: ${
  answers.value["Отметьте жалобы с животом"]?.join(",") || ""
}
Мочеполовая система: ${
  answers.value["Отметьте жалобы с половой системой"]?.join(",") || ""
}
Опорно-двигательная система: ${
  answers.value["Отметьте жалобы с мышцами"]?.join(",") || ""
}
Кровеносная система: ${
  answers.value["Отметьте жалобы с кровью"]?.join(",") || ""
}
Эндокринная система: ${
  answers.value["Отметьте жалобы с щитовидкой"]?.join(",") || ""
}`;
</script>

<style scoped>
.section-result {
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.result-hack {
  display: flex;
  flex-direction: column;
}

.result-hack-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.result-hack-item h3 {
  margin-right: 20px;
}

@media (max-width: 580px) {
  .section-result {
    padding: 30px 20px;
  }
}
</style>
