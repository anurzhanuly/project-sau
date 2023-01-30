<template>
  <div class="authorization-main p-fluid">
    <form class="authorization-form">
      <div>
        <h4>Имя <span>*</span></h4>
        <input-text v-model="firstName" />
      </div>
      <div>
        <h4>Фамилия <span>*</span></h4>
        <input-text v-model="lastName" />
      </div>
      <div>
        <h4>Отчество</h4>
        <input-text v-model="middleName" />
      </div>
      <div>
        <h4>Номер телефона <span>*</span></h4>
        <input-text v-model="phone" />
      </div>
      <div>
        <h4>Выберите клинику</h4>
        <dropdown
          v-model="сlinic"
          :options="allClinics"
          option-value="name"
          option-label="name"
          filter-placeholder="Поиск"
          filter
          lazy
          :empty-filter-message="'Ничего не найдено'"
          :empty-message="'Ничего не найдено'"
        />
      </div>
      <div>
        <h4>Выберите врача</h4>
        <dropdown
          v-model="doctor"
          :options="allDoctors"
          option-value="fullName"
          option-label="fullName"
          filter-placeholder="Поиск"
          filter
          lazy
          :empty-filter-message="'Ничего не найдено'"
          :empty-message="'Ничего не найдено'"
        />
      </div>
      <p-button
        label="Начать тест"
        class="p-button-success"
        @click="goToSurvey"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from "@/stores/adminStore";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import PButton from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

const toast = useToast();
const router = useRouter();
const adminStore = useAdminStore();

onMounted(() => {
  adminStore.getClinicsData();
});

const addToast = (severity: string, summary: string, message: string) => {
  toast.add({
    severity,
    summary,
    detail: message,
    life: 3000,
  });
};

const firstName = ref();
const lastName = ref();
const middleName = ref();
const phone = ref();
const сlinic = ref();
const doctor = ref();

const allClinics = computed(() => adminStore.allClinics);
const allDoctors = computed(() => adminStore.allDoctors);

const goToSurvey = () => {
  if (validateForm()) {
    router.push({
      path: "/surveylib",
    });
  }
};

const validateForm = () => {
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  const phonePattern = /^8[0-9]{10}$/;
  let isValid = false;

  if (!firstName.value) {
    addToast("warn", "Внимание", "Поле 'Имя' должно быть заполнено");
    return;
  }

  if (firstName.value.length > 2 && !cyrillicPattern.test(firstName.value)) {
    addToast(
      "warn",
      "Внимание",
      "Поле 'Имя' должно быть на кириллице и больше 2 символов",
    );
    return;
  }

  if (!lastName.value) {
    addToast("warn", "Внимание", "Поле 'Фамилия' должно быть заполнено");
    return;
  }

  if (lastName.value.length > 2 && !cyrillicPattern.test(lastName.value)) {
    addToast(
      "warn",
      "Внимание",
      "Поле 'Фамилия' должно быть на кириллице и больше 2 символов",
    );
    return;
  }

  if (middleName.value && !cyrillicPattern.test(middleName.value)) {
    addToast("warn", "Внимание", "Поле 'Отчество' должно быть на кириллице");
    return;
  }

  if (!phonePattern.test(phone.value)) {
    addToast(
      "warn",
      "Внимание",
      "Номер телефона' должен начинаеться с 8 и иметь 11 символов",
    );
    return;
  }

  firstName.value = firstName.value
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  lastName.value = lastName.value
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  middleName.value = middleName.value
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  isValid = true;
  return isValid;
};
</script>

<style scoped>
.authorization-main {
  display: flex;
  justify-content: center;
  padding: 35px 25px;
  background-color: #ffffff;
  border-radius: 5px;
}
.authorization-main h4 {
  margin-top: 15px;
  margin-bottom: 5px;
}

.authorization-main span {
  color: #d0312d;
}

.authorization-form {
  width: 300px;
}

.p-button {
  margin: 20px 0;
}
</style>
