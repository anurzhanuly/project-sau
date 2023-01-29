<template>
  <p-toast />
  <confirm-popup />
  <div class="wrapper">
    <div class="block">
      <h2>Наименование вопроса в рекомендациях</h2>
      <div class="input-wrapper">
        <input-text
          v-model="beforeQuestName"
          placeholder="До"
          style="width: 100%"
        />
        <dropdown
          v-model="afterQuestName"
          :options="questionNameOptions"
          option-value="value"
          option-label="value"
          placeholder="После"
          filter-placeholder="Поиск"
          filter
          lazy
          style="margin: 0 20px; width: 100%"
          :empty-filter-message="'Ничего не найдено'"
          :empty-message="'Ничего не найдено'"
        />
        <p-button
          label="Изменить"
          class="p-button-raised p-button-text"
          style="width: 50%"
          @click="confitmChangeQuestName($event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";
import PButton from "primevue/button";
import pToast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import ConfirmPopup from "primevue/confirmpopup";
import { ref, computed } from "vue";
import { useAdminStore } from "@/stores/adminStore";
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const adminStore = useAdminStore();

const beforeQuestName = ref("");
const afterQuestName = ref("");

const recommendationsJSON = computed(() => adminStore.allRecommendations);
const questionNameOptions = computed(
  () => adminStore.conditionColumns[0].options,
);

const changeQuestName = () => {
  const recommendationStr = JSON.stringify(recommendationsJSON.value);
  const newRecommendation = recommendationStr
    .split(beforeQuestName.value)
    .join(afterQuestName.value);
  console.log(newRecommendation);
};

const confitmChangeQuestName = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: "Вы уверены?",
    acceptLabel: "Да",
    rejectLabel: "Нет",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: changeQuestName,
  });
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper {
  display: flex;
  margin-top: 20px;
}

.block {
  margin-top: 40px;
}
</style>
