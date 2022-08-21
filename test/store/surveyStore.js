import { defineStore } from 'pinia';

export const useSurveyStore = defineStore({
  id: 'survey',
  state: () => ({
    resultAnswers: {}
  })
});
