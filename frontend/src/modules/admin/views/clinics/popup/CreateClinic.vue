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
import type { Clinics } from "@/modules/admin/views/clinics/types/clinics";
import { useClinicsStore } from "../store/clinics.store";
import { createPopupFields } from "@/utils/popUp";
import { error, success } from "@/utils/toast";
import { computed, ref, inject } from "vue";

import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

const clinicStore = useClinicsStore();
const dialogRef = inject<any>("dialogRef");
const clinicsColumns = computed(() => clinicStore.clinicsColumns);

const newRecord = ref(
  createPopupFields(
    clinicsColumns.value.filter(el => el.header !== "Удаление"),
  ),
);

function createClinic() {
  if (checkClinicRecValidation()) {
    const res = { ...newRecord.value } as unknown as Clinics;
    clinicStore.createClinicData(res);
    success("Успешно", "Клиника добавлена, не забудьте сохранить");
    dialogRef.value.close();
  }
}

function checkClinicRecValidation() {
  if (!newRecord.value.name.length) {
    error("Ошибка", "Поле 'Название клиники' должно быть заполнено");
    return false;
  }

  if (!newRecord.value.city.length) {
    error("Ошибка", "Поле 'Поле 'Город' должно быть заполнено");
    return false;
  }

  if (!newRecord.value.place.length) {
    error("Ошибка", "Поле 'Поле 'Адрес' должно быть заполнено");
    return false;
  }

  return true;
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
