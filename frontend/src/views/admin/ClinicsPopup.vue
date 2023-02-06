<template>
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
    <p-button label="Создать" class="p-button-success" @click="createClinic" />
  </div>
</template>

<script lang="ts" setup>
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { createPopupFields } from "@/utils/popUp";
import { useAdminStore } from "@/stores/adminStore";
import { computed, ref, inject } from "vue";
import type { Clinics } from "@/types/clinics";
import { error, success } from "@/utils/toast";

const adminStore = useAdminStore();
const dialogRef = inject<any>("dialogRef");
const clinicsColumns = computed(() => adminStore.clinicsColumns);

const newRecord = ref(
  createPopupFields(
    clinicsColumns.value.filter(el => el.header !== "Удаление"),
  ),
);

function createClinic() {
  if (checkClinicRecValidation()) {
    const res = { ...newRecord.value } as unknown as Clinics;
    adminStore.createClinicData(res);
    success("Успешно", "Клиника добавлена, не забудьте сохранить");
    dialogRef.value.close();
  }
}

function checkClinicRecValidation() {
  let isValidated = false;
  if (!newRecord.value.name.length) {
    return error("Ошибка", "Поле 'Название клиники' должно быть заполнено");
  }

  if (!newRecord.value.city.length) {
    return error("Ошибка", "Поле 'Поле 'Город' должно быть заполнено");
  }

  if (!newRecord.value.place.length) {
    return error("Ошибка", "Поле 'Поле 'Адрес' должно быть заполнено");
  }

  isValidated = true;
  return isValidated;
}
</script>
