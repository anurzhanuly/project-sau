<template>
  <p-toast />
  <p-dialog
    v-model:visible="displayAdminPopup"
    modal
    draggable
    :closable="false"
    header="Введите логин и пароль"
    :style="{ width: '50vw' }"
  >
    <div class="popup">
      <div>
        <h3>Логин</h3>
        <input-text v-model="newRecord.login" style="width: 100%" />
      </div>
      <div>
        <h3>Пароль</h3>
        <input-text
          v-model="newRecord.password"
          type="password"
          style="width: 100%"
        />
      </div>
    </div>
    <template #footer>
      <p-button
        label="Отменить"
        icon="pi pi-times"
        class="p-button-text"
        @click="hidePopup()"
      />
      <p-button
        label="Ввести"
        icon="pi pi-check"
        class="p-button-success"
        autofocus
        @click="checkAdmin()"
      />
    </template>
  </p-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { usePopupStore } from "../stores/popupStore";
import PDialog from "primevue/dialog";
import PButton from "primevue/button";
import PToast from "primevue/toast";
import InputText from "primevue/inputtext";
import { useRouter } from "vue-router";
import { error } from "@/utils/toast";

const router = useRouter();
const popupStore = usePopupStore();

const displayAdminPopup = computed(() => popupStore.isPopupVisible);

const newRecord = ref({} as Record<string, string>);
const isRecordValidated = ref(false);

const checkAdminValidation = () => {
  isRecordValidated.value = false;
  if (newRecord.value.login !== "symptom") {
    return error("Ошибка", "Неверный логин или пароль");
  }
  if (newRecord.value.password !== "adam") {
    return error("Ошибка", "Неверный логин или пароль");
  }
  isRecordValidated.value = true;
};

const checkAdmin = () => {
  checkAdminValidation();
  if (isRecordValidated.value) {
    router.push({
      name: "admin",
    });
    hidePopup();
  }
};

const hidePopup = () => {
  newRecord.value = {};
  popupStore.closePopup();
};
</script>

<style scoped>
.popup {
  display: flex;
  flex-direction: column;
}

.popup h3 {
  margin-bottom: 10px;
}
</style>
