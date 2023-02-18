import { changeQuestionsJson } from "../services/questitons.refbooks";
import type { ResQuestions } from "@/types/questions";
import { defineStore } from "pinia";

export const useQuestionsStore = defineStore("questions", () => {
  async function changeQuestionsData(questions: ResQuestions): Promise<void> {
    changeQuestionsJson(questions);
  }

  return {
    changeQuestionsData,
  };
});
