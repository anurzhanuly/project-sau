<template>
  <div>
    <div class="create-clinic-block p-fluid">
      <form class="create-clinic-form">
        <div>
          <h3>Название клиники</h3>
          <input-text v-model="newClinicName" />
        </div>
        <div>
          <h3>Город</h3>
          <dropdown
            v-model="newClinicCityId"
            :options="cities"
            option-label="attributes.city"
            option-value="id"
            placeholder="Выберите город"
          />
        </div>
        <div>
          <h3>Адрес</h3>
          <input-text v-model="newClinicAddress" />
        </div>
      </form>
    </div>

    <div class="create-clinic-action">
      <p-button
        label="Сохранить"
        class="p-button-success"
        @click="createClinic"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClinicsStore } from "../store/clinics.store";
import { error, success } from "@/utils/toast";
import { ref, inject } from "vue";

import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { storeToRefs } from "pinia";

const clinicStore = useClinicsStore();
const dialogRef = inject<any>("dialogRef");

const newClinicName = ref<string>("");
const newClinicCityId = ref<string>("");
const newClinicAddress = ref<string>("");

const { cities } = storeToRefs(clinicStore);

async function createClinic(): Promise<void> {
  if (validateClinic()) {
    const res = await clinicStore.createClinicData({
      name: newClinicName.value,
      address: newClinicAddress.value,
      city_id: newClinicCityId.value,
    });

    if (res === 200) {
      success("Успешно", `Клиника добавлена`);
      dialogRef.value.close();
    }
  }
}

function validateClinic(): boolean {
  if (!newClinicName.value) {
    error("Ошибка", "Поле 'Название клиники' должно быть заполнено");
    return false;
  }

  if (!newClinicCityId.value) {
    error("Ошибка", "Поле 'Поле 'Город' должно быть заполнено");
    return false;
  }

  if (!newClinicAddress.value) {
    error("Ошибка", "Поле 'Поле 'Адрес' должно быть заполнено");
    return false;
  }

  return true;
}
</script>

<style>
.create-clinic-block {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.create-clinic-form {
  width: 60%;
}

.create-clinic-form > div {
  margin: 15px 0;
}

.create-clinic-action {
  display: flex;
  justify-content: center;
}

.create-clinic-action .p-button {
  width: 315px;
}
</style>
