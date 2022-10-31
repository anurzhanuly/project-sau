<template>
  <div id="survey" />
</template>

<script setup>
import 'survey-core/defaultV2.min.css';
import { StylesManager } from 'survey-core';
import { Survey } from 'survey-knockout-ui';
import { onMounted } from 'vue';
import mock from '../services/newMock.js';

StylesManager.applyTheme('defaultV2');

const surveyJson = mock;

onMounted(() => {
  function surveyComplete(sender) {
    console.log(sender.data);
  }
  const survey = new Survey(surveyJson);
  console.log(survey);
  survey.render('survey');
  survey.onComplete.add(surveyComplete);
});
</script>
