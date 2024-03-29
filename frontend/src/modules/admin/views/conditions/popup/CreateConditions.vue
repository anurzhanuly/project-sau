<template>
  <div class="popup">
    <div v-for="(column, idx) in conditionColumns" :key="idx">
      <div v-if="column.field === 'questionName'">
        <h3>{{ column.header }}</h3>
        <dropdown
          v-model="newRecord[column.field]"
          :options="column?.options"
          option-value="value"
          option-label="value"
          placeholder="Выберите..."
          filter-placeholder="Поиск"
          filter
          lazy
          style="width: 250px"
          :empty-filter-message="'Ничего не найдено'"
          :empty-message="'Ничего не найдено'"
          @change="addValueOptions"
        />
      </div>
      <div v-else-if="column.field === 'value'">
        <div v-if="!isValueHasChoices">
          <h3>{{ column.header }}</h3>
          <input-text v-model="conditionValue" style="width: 100%" />
        </div>
        <div v-if="isValueHasChoices">
          <h3>{{ column.header }}</h3>
          <p-multi-select
            v-model="newRecord[column.field]"
            :options="valueOptions"
            option-value="value"
            option-label="value"
            placeholder="Выберите..."
            filter-placeholder="Поиск"
            filter
            lazy
            style="width: 250px"
            :empty-filter-message="'Ничего не найдено'"
            :empty-message="'Ничего не найдено'"
          />
        </div>
      </div>
      <div v-else-if="column.hasDropdown">
        <h3>{{ column.header }}</h3>
        <dropdown
          v-model="newRecord[column.field]"
          :options="column?.options"
          option-value="value"
          option-label="value"
          placeholder="Выберите..."
          filter-placeholder="Поиск"
          filter
          lazy
          :empty-filter-message="'Ничего не найдено'"
          :empty-message="'Ничего не найдено'"
        />
      </div>
      <div v-else-if="column.field === 'testCase'">
        <h3>{{ column.header }}</h3>
        <input-text v-model="newRecord[column.field]" style="width: 100%" />
      </div>
    </div>
    <p-button
      label="Создать"
      icon="pi pi-check"
      class="p-button-success"
      autofocus
      @click="createRecCondition()"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Condition } from "@/modules/admin/types/recommendations";
import { useAdminStore } from "@/modules/admin/stores/admin.store";
import { createPopupFields } from "@/utils/popUp";
import { error, success } from "@/utils/toast";
import { computed, ref, inject } from "vue";

import PMultiSelect from "primevue/multiselect";
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

const adminStore = useAdminStore();
const dialogRef = inject<any>("dialogRef");
const conditionValue = ref<string>("");
const isValueHasChoices = ref<boolean>(false);
const valueOptions = ref<Record<string, string>[]>([]);

const conditionColumns = computed(() => adminStore.conditionColumns);

const newRecord = ref(
  createPopupFields(
    conditionColumns.value.filter(el => el.header !== "Удаление"),
  ),
);

const checkConditionRecValidation = (): boolean => {
  if (!newRecord.value.questionName.length) {
    error("Ошибка", "Поле 'Наименование вопроса' должно быть заполнено");
    return false;
  }

  if (!newRecord.value.compare.length) {
    error("Ошибка", "Поле 'Условие' должно быть заполнено");
    return false;
  }

  if (!newRecord.value.value.length && isValueHasChoices.value) {
    error("Ошибка", "Поле 'Значение1' должно быть заполнено");
    return false;
  }

  if (!conditionValue.value.length && !isValueHasChoices.value) {
    error("Ошибка", "Поле 'Значение' должно быть заполнено");
    return false;
  }

  if (/\D/.test(newRecord.value.testCase) || !newRecord.value.testCase.length) {
    error("Ошибка", "Номер рекомендации должен состоять из цифр");
    return false;
  }

  return true;
};

const createRecCondition = () => {
  if (checkConditionRecValidation()) {
    const res = { ...newRecord.value } as unknown as Condition;
    const question = adminStore.questions.filter(
      el => el.name === newRecord.value.questionName,
    )[0];
    res.multiple = !!(question?.maxSelectedChoices > 1);
    res.type = question.type;
    res.value = isValueHasChoices.value
      ? res.value
      : conditionValue.value.split(",");

    adminStore.createConditionInRec(res);
    success("Успешно", "Условие создано, не забудьте сохранить");
    hidePopup();
  }
};

const addValueOptions = () => {
  const question = adminStore.questions.filter(
    el => el.name === newRecord.value.questionName,
  )[0];

  if (question?.choices) {
    isValueHasChoices.value = true;
    valueOptions.value = question.choices.map(el => {
      return { value: el };
    });
    return;
  }
  isValueHasChoices.value = false;
};

const hidePopup = () => {
  newRecord.value = createPopupFields(conditionColumns.value);
  isValueHasChoices.value = false;
  dialogRef.value.close();
};
</script>

<style scoped>
.popup {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
}

.popup h3 {
  margin-bottom: 10px;
}

.p-dropdown-items-wrapper {
  max-width: 200px !important;
}
</style>
