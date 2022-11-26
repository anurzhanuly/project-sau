<template>
  <p-dialog
    v-model:visible="displayCreatePopup"
    modal
    draggable
    :closable="false"
    header="Создание нового условия"
    :style="{ width: '50vw' }"
  >
    <div class="popup">
      <div v-for="(column, idx) in conditionColumns" :key="idx">
        <div v-if="column.field === 'name'">
          <h3>{{ column.header }}</h3>
          <dropdown
            v-model="questionName"
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
        <div v-else>
          <h3>{{ column.header }}</h3>
          <input-text v-model="newRecord[column.field]" style="width: 100%" />
        </div>
      </div>
    </div>
    <template #footer>
      <p-button
        label="Отменить создание"
        icon="pi pi-times"
        class="p-button-text"
        @click="hidePopup()"
      />
      <p-button
        label="Создать"
        icon="pi pi-check"
        class="p-button-success"
        autofocus
        @click="createRecCondition()"
      />
    </template>
  </p-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { usePopupStore } from "../../stores/popupStore";
import { useAdminStore } from "../../stores/adminStore";
import PDialog from "primevue/dialog";
import PMultiSelect from "primevue/multiselect";
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { useToast } from "primevue/usetoast";
import type { Condition } from "@/types/recommendations";

const toast = useToast();
const addToast = (severity: string, summary: string, message: string) => {
  toast.add({
    severity,
    summary,
    detail: message,
    life: 3000,
  });
};

const adminStore = useAdminStore();
const popupStore = usePopupStore();

const displayCreatePopup = computed(() => popupStore.isPopupVisible);
const conditionColumns = computed(() => adminStore.conditionColumns);

const newRecord = ref(popupStore.createPopupFields(conditionColumns.value));
const isRecordValidated = ref(false);
const questionName = ref("");
const conditionValue = ref("");
const isValueHasChoices = ref(false);
const valueOptions = ref([] as Record<string, string>[]);

const checkConditionRecValidation = () => {
  isRecordValidated.value = false;
  if (!questionName.value.length) {
    addToast(
      "error",
      "Ошибка",
      "Поле 'Наименование вопроса' должно быть заполнено",
    );
    return;
  }
  if (!newRecord.value.compare.length) {
    addToast("error", "Ошибка", "Поле 'Условие' должно быть заполнено");
    return;
  }
  if (!newRecord.value.value.length && isValueHasChoices.value) {
    addToast("error", "Ошибка", "Поле 'Значение1' должно быть заполнено");
    return;
  }
  if (!conditionValue.value.length && !isValueHasChoices.value) {
    addToast("error", "Ошибка", "Поле 'Значение' должно быть заполнено");
    return;
  }
  if (/\D/.test(newRecord.value.testCase) || !newRecord.value.testCase.length) {
    addToast("error", "Ошибка", "Номер рекомендации должен состоять из цифр");
    return;
  }
  isRecordValidated.value = true;
};

const createRecCondition = () => {
  checkConditionRecValidation();
  if (isRecordValidated.value) {
    const res = { ...newRecord.value } as unknown as Condition;
    const question = adminStore.questions.filter(
      el => el.name === questionName.value,
    )[0];
    res.multiple = !!(question?.maxSelectedChoices > 1);
    res.type = question.type;
    res.value = isValueHasChoices.value
      ? res.value
      : conditionValue.value.split(",");

    adminStore.createConditionInRec(res, questionName.value);
    addToast("success", "Успешно", "Условие создано, не забудьте сохранить");
    hidePopup();
  }
};

const addValueOptions = () => {
  const question = adminStore.questions.filter(
    el => el.name === questionName.value,
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
  newRecord.value = popupStore.createPopupFields(conditionColumns.value);
  questionName.value = "";
  isValueHasChoices.value = false;
  popupStore.closePopup();
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
