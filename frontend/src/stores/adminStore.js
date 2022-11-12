import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { getRecommendationsJson } from "../services/admin.js";

export const useAdminStore = defineStore("admin", () => {
  const recommendations = ref([]);

  async function getRecommendationsData() {
    const res = await getRecommendationsJson();

    if (!axios.isAxiosError(res)) {
      recommendations.value = JSON.parse(res.data.result);
    }
    console.log(res);
    return res;
  }

  function deleteRecByIndex(recName, conditionIndex, keyInCondition) {
    const rec = recommendations.value.filter(el => {
      return el.name === recName;
    })[0];
    const recIndex = recommendations.value.indexOf(rec);
    delete recommendations.value[recIndex].conditions[conditionIndex][
      keyInCondition
    ];
  }

  return {
    recommendations,
    getRecommendationsData,
    deleteRecByIndex,
  };
});
