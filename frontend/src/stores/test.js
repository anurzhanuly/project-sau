import { defineStore } from 'pinia';

export const useTestStore = defineStore({
  id: 'test',
  state: () => ({
    resultAnswers: {}
  })
});
