<template>
  <div class="result-wrapper">
    <div class="result-item">
      <h3>Жалобы при поступлении</h3>
      <p-textarea v-model="complaints" cols="60" rows="5" />
    </div>
    <div class="result-item">
      <h3>Анамнез заболевания</h3>
      <p-textarea v-model="complaintsAnamnesis" cols="60" rows="5" />
    </div>
    <div class="result-item">
      <h3>Анамнез жизни</h3>
      <p-textarea v-model="lifeAnamnesis" cols="60" rows="6" />
    </div>
    <div class="result-item">
      <h3>Аллергологический анамнез</h3>
      <p-textarea v-model="alergicAnamnesis" cols="60" rows="5" />
    </div>
    <div class="result-item">
      <h3>Объективные данные</h3>
      <p-textarea v-model="objectiveData" cols="60" rows="10" />
    </div>
    <div class="result-item">
      <h3>Объективный осмотр</h3>
      <p-textarea v-model="objectiveExamination" cols="60" rows="10" />
    </div>
  </div>
  <div class="btn-wrapper">
    <p-button
      label="Сохранить"
      class="p-button-raised p-button-text"
      @click="postPatientResultData"
    />
  </div>
</template>

<script lang="ts" setup>
import { useSurveyStore } from "../modules/survey/store/survey.store";
import { ref, computed } from "vue";
import PTextarea from "primevue/textarea";
import PButton from "primevue/button";

const surveyStore = useSurveyStore();
const answers = computed(() => surveyStore.resultAnswers || {});

const complaints = ref("");
const complaintsAnamnesis = ref("");
const lifeAnamnesis = ref("");
const alergicAnamnesis = ref("");
const objectiveData = ref("");
const objectiveExamination = ref("");

const postPatientResultData = () => {
  const patientData = {} as Record<string, string>;
  patientData.complaints = complaints.value;
  patientData.complaintsAnamnesis = complaintsAnamnesis.value;
  patientData.lifeAnamnesis = lifeAnamnesis.value;
  patientData.alergicAnamnesis = alergicAnamnesis.value;
  patientData.objectiveData = objectiveData.value;
  patientData.objectiveExamination = objectiveExamination.value;
  console.log(patientData);
};

if (answers.value["Есть ли у вас сейчас жалобы?"].includes("Да")) {
  complaints.value = `${
    answers.value["Какие у Вас основные жалобы?"]?.join(",") || ""
  }`;
  complaintsAnamnesis.value = `На протяжении ${
    answers.value[
      "На протяжении какого времени Вы испытываете подобные симптомы?"
    ]?.join(",") || ""
  } становится ${answers.value["Становится ли Вам лучше?"]?.join(",") || ""}`;
} else {
  complaints.value = "Жалобы не указал";
}

lifeAnamnesis.value = `Хронические заболевания: ${
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

alergicAnamnesis.value = `${
  answers.value["Есть ли у Вас аллергия?"]?.join(",") || ""
} ${answers.value["Укажите на что у вас аллергия"]?.join(",") || ""}`;

objectiveData.value = `Общее состояние: ${
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
.result-wrapper {
  display: flex;
  flex-direction: column;
}

.result-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.result-item h3 {
  margin-right: 20px;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
