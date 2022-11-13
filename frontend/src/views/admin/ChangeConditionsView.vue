<template>
  <p-toast />
  <confirm-popup />
  <section class="section-recommendations-change">
    <div class="recommendation-nav">
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
    <div v-if="checkedRecommendationName !== ''" class="recommendation-body">
      <p-panel
        v-for="(condition, index) in checkedRecommendationObj.conditions"
        :key="index"
        :header="`${index + 1}`"
        :toggleable="true"
        :collapsed="true"
      >
        <p-button
          icon="pi pi-plus"
          class="p-button-rounded p-button-success p-button-outlined create-rec-btn"
          @click="
            popupStore.openPopupWithProps({ checkedRecommendationName, index })
          "
        />
        <div
          v-for="(key, idx) in Object.keys(condition)"
          :key="idx"
          class="condition-item"
        >
          <p>{{ key }}</p>
          <p>{{ condition[key].compare }}</p>
          <p>{{ condition[key].value.join(",") }}</p>
          <p>{{ condition[key].testCase }}</p>
          <p-button
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-outlined"
            @click="
              confirmDeleteConditionItem(
                $event,
                checkedRecommendationName,
                index,
                key,
              )
            "
          />
        </div>
      </p-panel>
      <p-button label="Сохранить" class="p-button-lg" />
    </div>
  </section>
  <create-conditions-popup-component />
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import pToast from "primevue/toast";
import ConfirmPopup from "primevue/confirmpopup";
import { useConfirm } from "primevue/useconfirm";
import { useAdminStore } from "../../stores/adminStore";
import { usePopupStore } from "../../stores/popupStore";
import CreateConditionsPopupComponent from "./CreateConditionsPopupComponent.vue";

const confirm = useConfirm();

const adminStore = useAdminStore();
const popupStore = usePopupStore();

const checkedRecommendationName = ref("");
const checkedRecommendationObj = ref({});

onMounted(() => {
  if (!adminStore.recommendations.length) {
    adminStore.getRecommendationsData();
  }

  if (!adminStore.questions.length) {
    adminStore.getQuestionsData();
  }
});

const recommendationsJSON = computed(() => adminStore.recommendations);

watch(checkedRecommendationName, newRecommendationName => {
  checkedRecommendationObj.value = recommendationsJSON.value.filter(
    el => el.name === newRecommendationName,
  )[0];
});

const confirmDeleteConditionItem = (
  event,
  recName,
  conditionIndex,
  keyInCondition,
) => {
  confirm.require({
    target: event.currentTarget,
    message: "Вы уверены?",
    acceptLabel: "Да",
    rejectLabel: "Нет",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: () => {
      adminStore.deleteRecByIndex(recName, conditionIndex, keyInCondition);
    },
  });
};
</script>

<style scoped>
.section-recommendations-change {
  display: flex;
  padding: 10px 0;
}

.recommendation-nav {
  width: 20vw;
  display: flex;
  flex-direction: column;
}

.recommendation-item {
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

.recommendation-body {
  width: 70vw;
  padding-left: 20px;
}

.condition-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}

.condition-item p {
  word-wrap: break-word;
}

.condition-item p:first-child {
  width: 35%;
}

.condition-item p:nth-child(2) {
  width: 10%;
}

.condition-item p:nth-child(3) {
  width: 35%;
}

.condition-item p:nth-child(4) {
  width: 10%;
}

.create-rec-btn {
  margin-bottom: 20px;
}

.p-button-lg {
  margin-top: 20px;
}
</style>
