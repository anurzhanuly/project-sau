import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { getRecommendationsJson } from "../services/admin.js";

export const useAdminStore = defineStore("admin", () => {
  const recommendations = ref("");

  async function getRecommendationsData() {
    const res = await getRecommendationsJson();

    if (!axios.isAxiosError(res)) {
      recommendations.value = res.data.result;
    }

    return res;
  }

  return {
    recommendations,
    getRecommendationsData,
  };
});
