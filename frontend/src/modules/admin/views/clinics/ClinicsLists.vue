<template>
  <div>
    <data-table
      v-model:selection="selectedClinic"
      selection-mode="single"
      :value="clinics"
      class="p-datatable-sm"
      striped-rows
      reorderable-columns
      resizable-columns
      show-gridlines
      edit-mode="cell"
    >
      <template #header>
        <div class="clinics-table-header">
          <div>
            <h2>Все клиники</h2>
          </div>
          <div>
            <p-button
              label="Добавить клинику"
              class="p-button-success"
              @click="openCreateClinic"
            />
          </div>
        </div>
      </template>
      <column header="Id" field="id" header-style="width: 2%" />
      <column header="Название" field="attributes.name" />
      <column header="Город" field="attributes.city" />
      <column header="Адрес" field="attributes.address" />
      <column header-style="width: 6%">
        <template #body>
          <p-button label="Изменить" @click="changeClinic" />
        </template>
      </column>
      <column header-style="width: 6%">
        <template #body>
          <p-button label="Удалить" class="p-button-danger" :disabled="true" />
        </template>
      </column>
    </data-table>

    <data-table
      :value="doctors"
      selection-mode="single"
      class="p-datatable-sm"
      striped-rows
      reorderable-columns
      resizable-columns
      show-gridlines
      edit-mode="cell"
    >
      <template #header>
        <div class="clinics-table-header">
          <div>
            <h2>Все врачи</h2>
          </div>
          <div>
            <p-button
              label="Добавить врача"
              class="p-button-success"
              @click="openCreateDoctor"
            />
          </div>
        </div>
      </template>
      <column header="Id" field="id" header-style="width: 2%" />
      <column header="ФИО">
        <template #body="slotProps">
          {{ slotProps.data.attributes.firstName }}
          {{ slotProps.data.attributes.lastName }}
          {{ slotProps.data.attributes.midName }}
        </template>
      </column>
      <column header="Специализация" field="attributes.specialization" />
      <column header="Опыт" field="attributes.experience" />
      <column header-style="width: 6%">
        <template #body>
          <p-button label="Изменить" @click="changeDoctor" />
        </template>
      </column>
      <column header-style="width: 6%">
        <template #body>
          <p-button label="Удалить" class="p-button-danger" :disabled="true" />
        </template>
      </column>
    </data-table>
  </div>
  <confirm-popup />
</template>

<script lang="ts" setup>
import CreateClinic from "./popup/CreateClinic.vue";
import CreateDoctor from "./popup/CreateDoctor.vue";
import { useClinicsStore } from "./store/clinics.store";
import { onMounted } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import PButton from "primevue/button";
// import Dropdown from "primevue/dropdown";
// import InputText from "primevue/inputtext";
import ConfirmPopup from "primevue/confirmpopup";
// import { useConfirm } from "primevue/useconfirm";
import { useDialog } from "primevue/usedialog";
import { storeToRefs } from "pinia";

const clinicsStore = useClinicsStore();
const dialog = useDialog();
// const confirm = useConfirm();

const { clinics, doctors, selectedClinic } = storeToRefs(clinicsStore);

onMounted(() => {
  clinicsStore.getCitiesData();
  clinicsStore.getSpecializationsData();
});

function openCreateClinic(): void {
  dialog.open(CreateClinic, {
    props: {
      header: "Добавление новой клиники",
      style: {
        width: "30%",
      },
      modal: true,
    },
  });
}

function openCreateDoctor(): void {
  dialog.open(CreateDoctor, {
    props: {
      header: "Добавление нового врача",
      style: {
        width: "30%",
      },
      modal: true,
    },
  });
}

function changeClinic(): void {
  console.log("selectedClinic", selectedClinic.value);
}

function changeDoctor(): void {
  console.log("selectedClinic", selectedClinic.value);
}

// const onClinicCellEdit = async (
//   event: DataTableCellEditCompleteEvent,
// ): Promise<void> => {
//   const updated = { ...event.newData };
//   if (event.newValue && event.value !== event.newValue) {
//     clinicsStore.editLocalClinicsByIndex(event.index, updated);
//   }
// };

// const onDoctorCellEdit = async (
//   event: DataTableCellEditCompleteEvent,
// ): Promise<void> => {
//   const updated = { ...event.newData };
//   if (event.newValue && event.value !== event.newValue) {
//     clinicsStore.editLocalDoctorByIndex(event.index, updated);
//   }
// };

// function confirmDeleteClinic(event: any): void {
//   confirm.require({
//     target: event.currentTarget,
//     message: "Вы уверены?",
//     acceptLabel: "Да",
//     rejectLabel: "Нет",
//     icon: "pi pi-info-circle",
//     acceptClass: "p-button-danger",
//     accept: () => {
//       clinicsStore.deleteClinicByIndex(selectedClinic.value);
//     },
//   });
// }
</script>

<style scoped>
.p-datatable {
  margin-top: 20px;
}

.clinics-table-header {
  display: flex;
  justify-content: space-between;
}

.clinics-table-header .p-button {
  margin-left: 5px;
}
</style>
