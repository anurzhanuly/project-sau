<template>
  <data-table
    selection-mode="single"
    :value="myConsultation"
    responsive-layout="scroll"
    scrollable
    class="p-datatable-sm"
    striped-rows
    reorderable-columns
    resizable-columns
    column-resize-mode="expand"
  >
    <template #header>
      <h2>Назначенные консультации</h2>
    </template>
    <column
      v-for="(column, idx) in mainColumns"
      :key="idx"
      :header="column.header"
      :field="column.field"
    >
      <template #editor="{ data, field }">
        <p-button v-if="column.hasButton" style="width: 250px" label="qwe" />
        <input-text v-model="data[field]" style="width: 100%" />
      </template>
    </column>
  </data-table>
</template>

<script setup lang="ts">
import { useCabinetStore } from "@/modules/doctorCabinet/store/cabinet.store";
import { computed } from "vue";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";

const cabinetStore = useCabinetStore();

const mainColumns = computed(() => cabinetStore.mainColumns);
const myConsultation = computed(() => cabinetStore.myConsultation);
</script>
