<template>
  <div>
    <div class="create-clinic-block p-fluid">
      <form class="create-clinic-form">
        <div>
          <h3>Фамилия</h3>
          <input-text v-model="newDoctorFirstName" />
        </div>
        <div>
          <h3>Имя</h3>
          <input-text v-model="newDoctorLastName" />
        </div>
        <div>
          <h3>Отчество</h3>
          <input-text v-model="newDoctorMidName" />
        </div>
        <div>
          <h3>Опыт (число)</h3>
          <input-text v-model="newDoctorExp" type="number" />
        </div>
        <div>
          <h3>Специализация</h3>
          <dropdown
            v-model="newDoctorspecId"
            :options="specializations"
            option-label="attributes.name"
            option-value="id"
            placeholder="Выберите специализацию"
          />
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

const newDoctorFirstName = ref<string>("");
const newDoctorspecId = ref<string>("");
const newDoctorExp = ref<string>("");
const newDoctorLastName = ref<string>("");
const newDoctorMidName = ref<string>("");

const { specializations } = storeToRefs(clinicStore);

async function createClinic(): Promise<void> {
  if (validateDoctor()) {
    const res = await clinicStore.createDoctorData({
      first_name: newDoctorFirstName.value,
      last_name: newDoctorLastName.value,
      middle_name: newDoctorMidName.value,
      experience: newDoctorExp.value,
      specialization_id: newDoctorspecId.value,
    });

    if (res === 200) {
      success("Успешно", `Врач добавлен`);
      dialogRef.value.close();
    }
  }
}

function validateDoctor(): boolean {
  if (!newDoctorFirstName.value) {
    error("Ошибка", "Поле 'Фамилия' должно быть заполнено");
    return false;
  }

  if (!newDoctorLastName.value) {
    error("Ошибка", "Поле 'Поле 'Имя' должно быть заполнено");
    return false;
  }

  if (!newDoctorExp.value) {
    error("Ошибка", "Поле 'Опыт' должно быть заполнено");
    return false;
  }

  if (!newDoctorspecId.value) {
    error("Ошибка", "Поле 'Специализация' должно быть заполнено");
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
