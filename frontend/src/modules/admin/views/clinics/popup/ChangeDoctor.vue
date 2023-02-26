<template>
  <div>
    <div class="clinic-list-popup p-fluid">
      <form class="clinic-list-popup-form">
        <div>
          <h3>Фамилия</h3>
          <input-text v-model="changeDoctorFirstName" />
        </div>
        <div>
          <h3>Имя</h3>
          <input-text v-model="changeDoctorLastName" />
        </div>
        <div>
          <h3>Отчество</h3>
          <input-text v-model="changeDoctorMidName" />
        </div>
        <div>
          <h3>Опыт (число)</h3>
          <input-text v-model="changeDoctorExp" type="number" />
        </div>
        <div>
          <h3>Специализация</h3>
          <dropdown
            v-model="changeDoctorspecId"
            :options="specializations"
            option-label="attributes.name"
            option-value="id"
            placeholder="Выберите специализацию"
          />
        </div>
      </form>
    </div>

    <div class="clinic-list-popup-action">
      <p-button
        label="Сохранить"
        class="p-button-success"
        @click="changeDoctor"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClinicsStore } from "../store/clinics.store";
import { validateDoctor } from "@/utils/validation";
import { success } from "@/utils/toast";
import { ref, inject } from "vue";

import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { storeToRefs } from "pinia";

const clinicStore = useClinicsStore();
const dialogRef = inject<any>("dialogRef");

const { specializations, selectedDoctor } = storeToRefs(clinicStore);

const changeDoctorFirstName = ref<string>(
  selectedDoctor.value?.attributes.firstName!,
);
const changeDoctorLastName = ref<string>(
  selectedDoctor.value?.attributes.firstName!,
);
const changeDoctorMidName = ref<string>(
  selectedDoctor.value?.attributes.midName!,
);
const changeDoctorspecId = ref<string>("");
const changeDoctorExp = ref<string>("");

async function changeDoctor(): Promise<void> {
  if (
    validateDoctor(
      changeDoctorFirstName.value,
      changeDoctorLastName.value,
      changeDoctorExp.value,
      changeDoctorspecId.value,
    )
  ) {
    const res = await clinicStore.changeDoctorData(selectedDoctor.value?.id!, {
      first_name: changeDoctorFirstName.value,
      last_name: changeDoctorLastName.value,
      middle_name: changeDoctorMidName.value,
      experience: changeDoctorExp.value,
      specialization_id: changeDoctorspecId.value,
    });

    if (res === 200) {
      success("Успешно", `Врач изменен`);
      dialogRef.value.close();
    }
  }
}
</script>
