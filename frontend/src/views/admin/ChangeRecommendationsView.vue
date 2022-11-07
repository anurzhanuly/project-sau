<template>
  <section class="section-questions__add">
    <h2>Измените полученные рекомендации</h2>
    <p-textarea v-model="recommendationsJSON" rows="25" />
    <p-button label="Сохранить" class="p-button-lg" />
  </section>
</template>

<script setup>
import PTextarea from "primevue/textarea";
import PButton from "primevue/button";
import { ref } from "vue";
import { getRecommendationsJson } from "../../services/admin.js";

const recommendationsJSON = ref("");

const getRecommendations = async () => {
  const res = await getRecommendationsJson();
  recommendationsJSON.value = res.data.result;
};

getRecommendations();
</script>

<style scoped>
.section-questions__add {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.p-button-lg {
  margin-top: 20px;
}
</style>
