<template>
  <p-toast />
  <confirm-popup />
  <section class="section-recommendations-change">
    <div class="recommendation-nav">
      <label
        v-for="(recomm, index) in recommendationsJSON"
        :key="index"
        :for="`${index}`"
        class="label"
        :class="{ checked: checkedRecommendationName === recomm.name }"
      >
        <input
          :id="`${index}`"
          v-model="checkedRecommendationName"
          type="radio"
          class="hidden"
          :value="recomm.name"
        />
        {{ recomm.name }}
      </label>
      <div class="rec-create">
        <input-text v-model="newRecommendationName" />
        <p-button
          label="Добавить"
          class="p-button-raised p-button-text"
          @click="createRecommendation"
        />
      </div>
    </div>
    <div v-if="checkedRecommendationName !== ''" class="recommendation-body">
      <p-panel
        v-for="(arrCondition, index) in checkedRecommendationObj.conditions"
        :key="index"
        :header="`${index + 1}`"
        :toggleable="true"
        :collapsed="true"
      >
        <p-button
          icon="pi pi-plus"
          class="p-button-rounded p-button-success p-button-outlined create-rec-btn"
          @click="createConditionItem(index)"
        />
        <data-table
          :value="arrCondition"
          responsive-layout="scroll"
          scrollable
          class="p-datatable-sm"
          striped-rows
          reorderable-columns
          resizable-columns
          column-resize-mode="expand"
          show-gridlines
          edit-mode="cell"
          @cell-edit-complete="onCellEdit($event, index)"
        >
          <column
            v-for="(column, idx) in conditionColumns"
            :key="idx"
            :header="column.header"
            :field="column.field"
          >
            <template #editor="{ data, field }">
              <div v-if="column.field === 'value'">
                <p-multi-select
                  v-if="
                    adminStore.questions.filter(
                      el => el.name === data.questionName,
                    )[0]?.choices
                  "
                  v-model="data[field]"
                  :options="
                    adminStore.questions
                      .filter(el => el.name === data.questionName)[0]
                      ?.choices.map(el => {
                        return { value: el };
                      })
                  "
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
                <p-textarea v-else v-model="data[field]" style="width: 100%" />
              </div>
              <p-button
                v-else-if="column.header === 'Удаление'"
                icon="pi pi-times"
                class="p-button-rounded p-button-danger p-button-outlined"
                @click="confirmDeleteConditionItem($event, index, idx)"
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
                @change="field === 'questionName' ? (data.value = '') : null"
              />
              <input-text v-else v-model="data[field]" style="width: 100%" />
            </template>
          </column>
        </data-table>
      </p-panel>
      <div class="condition-buttons">
        <p-button
          label="Добавить"
          class="p-button-raised p-button-text"
          @click="createCondition"
        />
        <div>
          <input-number v-model="conditionDeleteIndex" />
          <p-button
            label="Удалить"
            class="p-button-raised p-button-danger p-button-text"
            @click="confirmDeleteCondition($event)"
          />
        </div>
        <p-button
          label="Сохранить"
          class="p-button-raised p-button-success p-button-text"
          @click="saveConditions"
        />
      </div>
    </div>
  </section>
  <create-conditions-popup-component />
</template>

<script lang="ts" setup>
import { ref, watch, computed } from "vue";
import DataTable, {
  type DataTableCellEditCompleteEvent,
} from "primevue/datatable";
import Column from "primevue/column";
import PPanel from "primevue/panel";
import PButton from "primevue/button";
import pToast from "primevue/toast";
import ConfirmPopup from "primevue/confirmpopup";
import PMultiSelect from "primevue/multiselect";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import PTextarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import { useConfirm } from "primevue/useconfirm";
import { useAdminStore } from "../../stores/adminStore";
import { usePopupStore } from "../../stores/popupStore";
import CreateConditionsPopupComponent from "./CreateConditionsPopupComponent.vue";
import { useToast } from "primevue/usetoast";
import axios from "axios";
import type { Condition, Recommendation } from "@/types/recommendations";
import type { Error } from "@/types/response";

const toast = useToast();
const confirm = useConfirm();

const adminStore = useAdminStore();
const popupStore = usePopupStore();

const checkedRecommendationName = ref("");
const checkedRecommendationObj = ref({} as Recommendation);
const conditionDeleteIndex = ref();
const newRecommendationName = ref("");

const recommendationsJSON = computed(() => adminStore.allRecommendations);
const conditionColumns = computed(() => adminStore.conditionColumns);

//здесь выбранный объект берёт ссылку и меняет сразу в сторе создание и удаление
watch(checkedRecommendationName, newRecommendationName => {
  checkedRecommendationObj.value = recommendationsJSON.value.filter(
    el => el.name === newRecommendationName,
  )[0];
});

const addToast = (severity: string, summary: string, message: string) => {
  toast.add({
    severity,
    summary,
    detail: message,
    life: 3000,
  });
};

const createRecommendation = () => {
  const newRecommendation = {} as Recommendation;
  newRecommendation.id =
    recommendationsJSON.value[recommendationsJSON.value.length - 1].id + 1;
  newRecommendation.name = newRecommendationName.value;
  newRecommendation.conditions = [];
  newRecommendation.tests = { 1: [""] };
  adminStore.allRecommendations.push(newRecommendation);
  newRecommendationName.value = "";
};

const createConditionItem = (conditionIndex: number) => {
  adminStore.checkedRecommendationName = checkedRecommendationName.value;
  adminStore.conditionIndex = conditionIndex;
  popupStore.openPopup();
};

const createCondition = () => {
  checkedRecommendationObj.value.conditions.push([{}] as Condition[]);
};

const saveConditions = async () => {
  const res = await adminStore.saveConditionsData(
    checkedRecommendationName.value,
  );

  if (res.status === 200) {
    addToast("success", "Успешно", "Изменения внесены");
  } else {
    if (axios.isAxiosError(res)) {
      const err = res.response?.data as Error;
      addToast("error", "Ошибка", err.ERROR);
    }
  }
};

const onCellEdit = async (
  event: DataTableCellEditCompleteEvent,
  index: number,
) => {
  const updated = { ...event.newData };
  adminStore.checkedRecommendationName = checkedRecommendationName.value;
  adminStore.conditionIndex = index;
  if (typeof updated.value === "string") {
    updated.value = updated.value.split(",");
  }

  if (event.newValue && event.value !== event.newValue) {
    adminStore.editLocalConditionsByIndex(event.index, updated);
  }
};

const deleteCondition = () => {
  if (
    checkedRecommendationObj.value.conditions[conditionDeleteIndex.value - 1]
  ) {
    checkedRecommendationObj.value.conditions.splice(
      conditionDeleteIndex.value - 1,
      1,
    );
    conditionDeleteIndex.value = null;
  }
};

const confirmDeleteCondition = (event: any) => {
  confirm.require({
    target: event.currentTarget,
    message: "Вы уверены?",
    acceptLabel: "Да",
    rejectLabel: "Нет",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: deleteCondition,
  });
};

const confirmDeleteConditionItem = (
  event: any,
  conditionIndex: number,
  tableIndex: number,
) => {
  confirm.require({
    target: event.currentTarget,
    message: "Вы уверены?",
    acceptLabel: "Да",
    rejectLabel: "Нет",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: () => {
      adminStore.checkedRecommendationName = checkedRecommendationName.value;
      adminStore.conditionIndex = conditionIndex;
      adminStore.deleteConditionByIndex(tableIndex);
    },
  });
};
</script>

<style scoped>
.section-recommendations-change {
  display: flex;
  padding: 10px 0;
}

.recommendation-nav {
  width: 20vw;
  display: flex;
  flex-direction: column;
}

.recommendation-item {
  cursor: pointer;
}

.hidden {
  visibility: hidden;
  position: absolute;
  right: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.label {
  display: block;
  border: 1px solid #879aac;
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;
  font-weight: 400;
  cursor: pointer;
}

.checked {
  background: #689be7;
  color: #fff;
}

.checked::before {
  content: "✔";
}

.recommendation-body {
  width: 70vw;
  padding-left: 20px;
}

.condition-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
}

.condition-item p {
  word-wrap: break-word;
}

.condition-item p:first-child {
  width: 35%;
}

.condition-item p:nth-child(2) {
  width: 10%;
}

.condition-item p:nth-child(3) {
  width: 35%;
}

.condition-item p:nth-child(4) {
  width: 10%;
}

.create-rec-btn {
  margin-bottom: 20px;
}

.condition-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.rec-create .p-inputtext {
  margin: 20px 0 10px;
  width: 170px;
}
</style>
