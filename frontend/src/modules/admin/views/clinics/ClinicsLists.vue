<template>
  <div>
    <data-table
      v-model:selection="selectedClinic"
      selection-mode="single"
      :value="allClinics"
      responsive-layout="scroll"
      scrollable
      class="p-datatable-sm"
      striped-rows
      reorderable-columns
      resizable-columns
      column-resize-mode="expand"
      show-gridlines
      edit-mode="cell"
      @cell-edit-complete="onClinicCellEdit($event)"
    >
      <template #header>
        <div class="clinics-table-header">
          <div>
            <h2>Клиники</h2>
          </div>
          <div>
            <p-button
              label="Добавить"
              class="p-button-success"
              @click="openClinicsPopup"
            />
            <p-button label="Сохранить" />
          </div>
        </div>
      </template>
      <column
        v-for="(column, idx) in clinicsColumns"
        :key="idx"
        :header="column.header"
        :field="column.field"
      >
        <template #editor="{ data, field }">
          <p-button
            v-if="column.header === 'Удаление'"
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-outlined"
            @click="confirmDeleteClinic($event)"
          />
          <dropdown
            v-else-if="column.hasDropdown"
            v-model="data[field]"
            :options="column?.options"
            option-value="value"
            option-label="value"
            placeholder="Выберите..."
            style="width: 250px"
            filter-placeholder="Поиск"
            lazy
            filter
            :empty-filter-message="'Ничего не найдено'"
            :empty-message="'Ничего не найдено'"
            @change="field === 'city' ? (data.value = '') : null"
          />
          <input-text v-else v-model="data[field]" style="width: 100%" />
        </template>
      </column>
    </data-table>

    <data-table
      selection-mode="single"
      :value="allDoctors"
      responsive-layout="scroll"
      scrollable
      class="p-datatable-sm"
      striped-rows
      reorderable-columns
      resizable-columns
      column-resize-mode="expand"
      show-gridlines
      edit-mode="cell"
      @cell-edit-complete="onDoctorCellEdit($event)"
    >
      <template #header>
        <div class="clinics-table-header">
          <div>
            <h2>Врачи в клинике</h2>
          </div>
          <div>
            <p-button label="Добавить" class="p-button-success" />
            <p-button label="Сохранить" />
          </div>
        </div>
      </template>
      <column
        v-for="(column, idx) in doctorsColumns"
        :key="idx"
        :header="column.header"
        :field="column.field"
      >
        <template #editor="{ data, field }">
          <p-button
            v-if="column.header === 'Удаление'"
            icon="pi pi-times"
            class="p-button-rounded p-button-danger p-button-outlined"
          />
          <input-text v-else v-model="data[field]" style="width: 100%" />
        </template>
      </column>
    </data-table>
  </div>
  <confirm-popup />
</template>

<script lang="ts" setup>
import CreateClinic from "./popup/CreateClinic.vue";
import { useClinicsStore } from "./store/clinics.store";
import { ref, computed } from "vue";

import DataTable, {
  type DataTableCellEditCompleteEvent,
} from "primevue/datatable";
import Column from "primevue/column";
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import ConfirmPopup from "primevue/confirmpopup";
import { useConfirm } from "primevue/useconfirm";
import { useDialog } from "primevue/usedialog";

const clinicsStore = useClinicsStore();
const dialog = useDialog();
const confirm = useConfirm();
const selectedClinic = ref();

const clinicsColumns = computed(() => clinicsStore.clinicsColumns);
const doctorsColumns = computed(() => clinicsStore.doctorsColumns);
const allClinics = computed(() => clinicsStore.allClinics);
const allDoctors = computed(() => clinicsStore.allDoctors);

function openClinicsPopup() {
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

const onClinicCellEdit = async (event: DataTableCellEditCompleteEvent) => {
  const updated = { ...event.newData };
  if (event.newValue && event.value !== event.newValue) {
    clinicsStore.editLocalClinicsByIndex(event.index, updated);
  }
};

const onDoctorCellEdit = async (event: DataTableCellEditCompleteEvent) => {
  const updated = { ...event.newData };
  if (event.newValue && event.value !== event.newValue) {
    clinicsStore.editLocalDoctorByIndex(event.index, updated);
  }
};

function confirmDeleteClinic(event: any) {
  confirm.require({
    target: event.currentTarget,
    message: "Вы уверены?",
    acceptLabel: "Да",
    rejectLabel: "Нет",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: () => {
      clinicsStore.deleteClinicByIndex(selectedClinic.value);
    },
  });
}
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
