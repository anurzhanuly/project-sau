<template>
  <div>
    <div class="clinic-list-popup p-fluid">
      <form class="clinic-list-popup-form">
        <div>
          <h3>Название клиники</h3>
          <input-text v-model="changeClinicName" />
        </div>
        <div>
          <h3>Город</h3>
          <dropdown
            v-model="changeClinicCityId"
            :options="cities"
            option-label="attributes.city"
            option-value="id"
            placeholder="Выберите город"
          />
        </div>
        <div>
          <h3>Адрес</h3>
          <input-text v-model="changeClinicAddress" />
        </div>
      </form>
    </div>

    <div class="clinic-list-popup-action">
      <p-button
        label="Изменить"
        class="p-button-success"
        @click="changeClinic"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useClinicsStore } from "../store/clinics.store";
import { validateClinic } from "@/utils/validation";
import { success } from "@/utils/toast";
import { ref, inject } from "vue";

import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import { storeToRefs } from "pinia";

const clinicStore = useClinicsStore();
const dialogRef = inject<any>("dialogRef");

const { cities, selectedClinic } = storeToRefs(clinicStore);

const changeClinicName = ref<string>(selectedClinic.value?.attributes.name!);
const changeClinicCityId = ref<string>("");
const changeClinicAddress = ref<string>(
  selectedClinic.value?.attributes.address!,
);

async function changeClinic(): Promise<void> {
  if (
    validateClinic(
      changeClinicName.value,
      changeClinicCityId.value,
      changeClinicAddress.value,
    )
  ) {
    const res = await clinicStore.changeClinicData(selectedClinic.value?.id!, {
      name: changeClinicName.value,
      address: changeClinicAddress.value,
      city_id: changeClinicCityId.value,
    });

    if (res === 200) {
      success("Успешно", `Клиника изменена`);
      dialogRef.value.close();
    }
  }
}
</script>
