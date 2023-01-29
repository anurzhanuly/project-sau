<template>
  <p-toast />
  <confirm-popup />
  <clinics-popup-component />
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
              @click="popupStore.openPopup"
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
</template>

<script lang="ts" setup>
import DataTable, {
  type DataTableCellEditCompleteEvent,
} from "primevue/datatable";
import pToast from "primevue/toast";
import Column from "primevue/column";
import PButton from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import ConfirmPopup from "primevue/confirmpopup";
import ClinicsPopupComponent from "./ClinicsPopupComponent.vue";
import { useConfirm } from "primevue/useconfirm";
import { usePopupStore } from "@/stores/popupStore";
import { useAdminStore } from "@/stores/adminStore";
import { ref, computed } from "vue";

const adminStore = useAdminStore();
const popupStore = usePopupStore();
const confirm = useConfirm();
const selectedClinic = ref();

const clinicsColumns = computed(() => adminStore.clinicsColumns);
const doctorsColumns = computed(() => adminStore.doctorsColumns);
const allClinics = computed(() => adminStore.allClinics);
const allDoctors = computed(() => adminStore.allDoctors);

const onClinicCellEdit = async (event: DataTableCellEditCompleteEvent) => {
  const updated = { ...event.newData };
  if (event.newValue && event.value !== event.newValue) {
    adminStore.editLocalClinicsByIndex(event.index, updated);
  }
};

const onDoctorCellEdit = async (event: DataTableCellEditCompleteEvent) => {
  const updated = { ...event.newData };
  if (event.newValue && event.value !== event.newValue) {
    adminStore.editLocalDoctorByIndex(event.index, updated);
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
      adminStore.deleteClinicByIndex(selectedClinic.value);
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
