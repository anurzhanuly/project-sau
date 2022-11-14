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
      <div v-for="(column, idx) in columns" :key="idx">
        <div v-if="column.hasDropdown">
          <h3>{{ column.header }}</h3>
          <dropdown
            v-model="newRecord[column.field]"
            :options="column?.options"
            option-value="value"
            option-label="value"
            placeholder="Выберите..."
            style="max-width: 100%; height: 100%"
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

<script setup>
import { computed, ref } from "vue";
import { usePopupStore } from "../../stores/popupStore";
import { useAdminStore } from "../../stores/adminStore";
import PDialog from "primevue/dialog";
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const addToast = (severity, summary, message) => {
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
const columns = computed(() => adminStore.conditionColumns);

const newRecord = ref(popupStore.createPopupFields(columns.value));
const isRecordValidated = ref(false);

const checkConditionRecValidation = () => {
  isRecordValidated.value = false;
  if (!newRecord.value.name.length) {
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
  if (!newRecord.value.value.length) {
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
    const res = { ...newRecord.value };
    const question = adminStore.questions.filter(el => el.name === res.name)[0];
    res.multiple = !!(question?.maxSelectedChoices > 1);
    res.type = question.type;
    res.value = res.value.split(",");

    const { checkedRecommendationName, index } = popupStore.conditionProps;

    adminStore.createConditionInRec(res, checkedRecommendationName, index);
    addToast("success", "Успешно", "Условие создано");
    hidePopup();
  }
};

const hidePopup = () => {
  newRecord.value = popupStore.createPopupFields(columns.value);
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
</style>
