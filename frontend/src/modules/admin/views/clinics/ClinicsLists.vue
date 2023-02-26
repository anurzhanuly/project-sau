<template>
  <div class="clinic-list">
    <data-table
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
        <div class="clinics-list-table-header">
          <div>
            <h2>Все клиники</h2>
          </div>
          <div>
            <p-button
              label="Добавить клинику"
              class="p-button-success"
              @click="createClinic"
            />
          </div>
        </div>
      </template>
      <column header="Id" field="id" header-style="width: 2%" />
      <column header="Название" field="attributes.name" />
      <column header="Город" field="attributes.city" />
      <column header="Адрес" field="attributes.address" />
      <column header-style="width: 6%">
        <template #body="slotProps">
          <p-button label="Изменить" @click="changeClinic(slotProps.data)" />
        </template>
      </column>
      <column header-style="width: 6%">
        <template #body>
          <p-button label="Удалить" class="p-button-danger" :disabled="true" />
        </template>
      </column>
    </data-table>

    <data-table
      selection-mode="single"
      :value="doctors"
      class="p-datatable-sm"
      striped-rows
      reorderable-columns
      resizable-columns
      show-gridlines
      edit-mode="cell"
    >
      <template #header>
        <div class="clinics-list-table-header">
          <div>
            <h2>Все врачи</h2>
          </div>
          <div>
            <p-button
              label="Добавить врача"
              class="p-button-success"
              @click="createDoctor"
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
        <template #body="slotProps">
          <p-button label="Изменить" @click="changeDoctor(slotProps.data)" />
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
import ChangeClinic from "./popup/ChangeClinic.vue";
import CreateDoctor from "./popup/CreateDoctor.vue";
import ChangeDoctor from "./popup/ChangeDoctor.vue";
import type { Clinics, Doctors } from "./types/clinics";
import { useClinicsStore } from "./store/clinics.store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import PButton from "primevue/button";
import ConfirmPopup from "primevue/confirmpopup";
// import { useConfirm } from "primevue/useconfirm";
import { useDialog } from "primevue/usedialog";

const clinicsStore = useClinicsStore();
const dialog = useDialog();
// const confirm = useConfirm();

const { clinics, doctors, selectedClinic, selectedDoctor } =
  storeToRefs(clinicsStore);

onMounted(() => {
  clinicsStore.getCitiesData();
  clinicsStore.getSpecializationsData();
});

function createClinic(): void {
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

function createDoctor(): void {
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

function changeClinic(data: Clinics): void {
  selectedClinic.value = data;
  dialog.open(ChangeClinic, {
    props: {
      header: "Изменение клинки",
      style: {
        width: "30%",
      },
      modal: true,
    },
  });
}

function changeDoctor(data: Doctors): void {
  selectedDoctor.value = data;
  dialog.open(ChangeDoctor, {
    props: {
      header: "Изменение врача",
      style: {
        width: "30%",
      },
      modal: true,
    },
  });
}
</script>

<style>
.clinic-list .p-datatable {
  margin-top: 20px;
}

.clinics-list-table-header {
  display: flex;
  justify-content: space-between;
}

.clinics-list-table-header .p-button {
  margin-left: 5px;
}

/* popup */
.clinic-list-popup {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.clinic-list-popup-form {
  width: 60%;
}

.clinic-list-popup-form > div {
  margin: 15px 0;
}

.clinic-list-popup-action {
  display: flex;
  justify-content: center;
}

.clinic-list-popup-action .p-button {
  width: 315px;
}
</style>
