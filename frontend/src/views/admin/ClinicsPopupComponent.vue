<template>
  <p-dialog
    v-model:visible="displayClinicsPopup"
    modal
    draggable
    :closable="false"
    header="Добавление новой клиники"
    :style="{ width: '50vw' }"
  >
    <div class="popup">
      <div v-for="(column, idx) in clinicsColumns" :key="idx">
        <div v-if="column.field === 'city'">
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
          />
        </div>
        <div v-else-if="column.header !== 'Удаление'">
          <h3>{{ column.header }}</h3>
          <input-text v-model="newRecord[column.field]" style="width: 100%" />
        </div>
      </div>
    </div>
    <template #footer>
      <p-button
        label="Создать"
        class="p-button-success"
        @click="createClinic"
      />
      <p-button label="Закрыть" @click="popupStore.closePopup()" />
    </template>
  </p-dialog>
</template>

<script lang="ts" setup>
import PDialog from "primevue/dialog";
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { useToast } from "primevue/usetoast";
import { usePopupStore } from "@/stores/popupStore";
import { useAdminStore } from "@/stores/adminStore";
import { computed, ref } from "vue";
import type { Clinics } from "@/types/clinics";

const toast = useToast();
const addToast = (severity: string, summary: string, message: string) => {
  toast.add({
    severity,
    summary,
    detail: message,
    life: 3000,
  });
};

const popupStore = usePopupStore();
const adminStore = useAdminStore();

const displayClinicsPopup = computed(() => popupStore.isPopupVisible);
const clinicsColumns = computed(() => adminStore.clinicsColumns);

const newRecord = ref(
  popupStore.createPopupFields(
    clinicsColumns.value.filter(el => el.header !== "Удаление"),
  ),
);

function createClinic() {
  if (checkClinicRecValidation()) {
    const res = { ...newRecord.value } as unknown as Clinics;
    adminStore.createClinicData(res);
    addToast("success", "Успешно", "Клиника добавлена, не забудьте сохранить");
    popupStore.closePopup();
  }
}

function checkClinicRecValidation() {
  let isValidated = false;
  if (!newRecord.value.name.length) {
    addToast(
      "error",
      "Ошибка",
      "Поле 'Название клиники' должно быть заполнено",
    );
    return;
  }

  if (!newRecord.value.city.length) {
    addToast("error", "Ошибка", "Поле 'Город' должно быть заполнено");
    return;
  }

  if (!newRecord.value.place.length) {
    addToast("error", "Ошибка", "Поле 'Адрес' должно быть заполнено");
    return;
  }
  isValidated = true;
  return isValidated;
}
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
