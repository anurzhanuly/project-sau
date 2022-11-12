<template>
  <section class="section-recommendations__change">
    <div class="recommendation__nav">
      <label
        v-for="(recomm, index) in recommendationsJSON"
        :key="index"
        :for="index"
        class="label"
        :class="{ checked: checkedRecommendationName === recomm.name }"
      >
        <input
          :id="index"
          v-model="checkedRecommendationName"
          type="radio"
          class="hidden"
          :value="recomm.name"
        />
        {{ recomm.name }}
      </label>
    </div>
    <div v-if="checkedRecommendationName !== ''" class="recommendation__body">
      <p-panel
        v-for="(condition, index) in checkedRecommendationObj.conditions"
        :key="index"
        :header="`${index + 1}`"
        :toggleable="true"
        :collapsed="true"
      >
        <div
          v-for="(key, idx) in Object.keys(condition)"
          :key="idx"
          class="condition__item"
        >
          <p>{{ key }}</p>
          <p>{{ condition[key].compare }}</p>
          <p>{{ condition[key].value.join(",") }}</p>
          <p-button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-outlined"
            @click="deleteConditionItem(checkedRecommendationName, index, key)"
          />
        </div>
      </p-panel>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import { useAdminStore } from "../../stores/adminStore";

const adminStore = useAdminStore();

const checkedRecommendationName = ref("");
const checkedRecommendationObj = ref({});

onMounted(() => {
  if (!adminStore.recommendations.length) {
    adminStore.getRecommendationsData();
  }
});

const recommendationsJSON = computed(() => adminStore.recommendations);

watch(checkedRecommendationName, newRecommendationName => {
  checkedRecommendationObj.value = recommendationsJSON.value.filter(
    el => el.name === newRecommendationName,
  )[0];
});

const deleteConditionItem = (recName, conditionIndex, keyInCondition) => {
  adminStore.deleteRecByIndex(recName, conditionIndex, keyInCondition);
};
</script>

<style scoped>
.section-recommendations__change {
  display: flex;
  padding: 10px 0;
}

.recommendation__nav {
  width: 20vw;
  display: flex;
  flex-direction: column;
}

.recommendation__item {
  cursor: pointer;
}

.hidden {
  visibility: hidden;
  position: absolute;
  right: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.label {
  display: block;
  border: 1px solid #879aac;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  font-weight: 400;
  cursor: pointer;
}

.checked {
  background: #689be7;
  color: #fff;
}

.checked::before {
  content: "✔";
}

.recommendation__body {
  width: 70vw;
  padding-left: 20px;
}

.condition__item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}

.condition__item p {
  max-width: 30%;
}
</style>
