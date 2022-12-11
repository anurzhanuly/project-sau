<template>
  <div id="survey" />
</template>

<script lang="ts" setup>
import "survey-core/defaultV2.min.css";
import { StylesManager } from "survey-core";
import { Survey } from "survey-knockout-ui";
import { computed } from "vue";
import "survey-core/survey.i18n";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSurveyStore } from "../stores/surveyStore.js";

const router = useRouter();
const surveyStore = useSurveyStore();
const surveyJson = computed(() => surveyStore.questions);

StylesManager.applyTheme("defaultV2");

onMounted(() => {
  const survey = new Survey(surveyJson.value);

  survey.locale = "ru";

  const surveyComplete = (sender: { data: Record<string, string[]> }) => {
    const newData = {} as Record<string, string[]>;
    for (let key in sender.data) {
      if (Array.isArray(sender.data[key])) {
        newData[key] = sender.data[key];
      } else {
        newData[key] = [`${sender.data[key]}`];
      }
      newData[key] = newData[key].includes("none")
        ? ["Без особенностей"]
        : newData[key];
    }

    surveyStore.postAnswersData({ answers: newData });
    router.push({
      path: "/result",
    });
  };
  survey.onComplete.add(surveyComplete);
  survey.render("survey");
});
</script>
