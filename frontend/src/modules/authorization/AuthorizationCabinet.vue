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
import { useClinicsStore } from "@/modules/admin/views/clinics/store/clinics.store";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { warn } from "@/utils/toast";

import PButton from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import { storeToRefs } from "pinia";

const router = useRouter();
const clinicStore = useClinicsStore();

onMounted(() => {
  clinicStore.getClinicsData();
});

const { allClinics, allDoctors } = storeToRefs(clinicStore);

const firstName = ref<string>("");
const lastName = ref<string>("");
const middleName = ref<string>("");
const phone = ref<string>("");
const сlinic = ref<string>("");
const doctor = ref<string>("");
const userData = ref<any>({});

const goToSurvey = (): void => {
  if (validateForm()) {
    router.push({
      path: "/survey",
    });
  }
};

const validateForm = (): boolean => {
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  const phonePattern = /^8[0-9]{10}$/;

  if (!firstName.value) {
    warn("Внимание", "Поле 'Имя' должно быть заполнено");
    return false;
  }

  if (firstName.value.length > 2 && !cyrillicPattern.test(firstName.value)) {
    warn("Внимание", "Поле 'Имя' должно быть на кириллице и больше 2 символов");
    return false;
  }

  if (!lastName.value) {
    warn("Внимание", "Поле 'Фамилия' должно быть заполнено");
    return false;
  }

  if (lastName.value.length > 2 && !cyrillicPattern.test(lastName.value)) {
    warn(
      "Внимание",
      "Поле 'Фамилия' должно быть на кириллице и больше 2 символов",
    );
    return false;
  }

  if (middleName.value && !cyrillicPattern.test(middleName.value)) {
    warn("Внимание", "Поле 'Отчество' должно быть заполнено");
    return false;
  }

  if (!phonePattern.test(phone.value)) {
    warn(
      "Внимание",
      "Номер телефона' должен начинаеться с 8 и иметь 11 символов",
    );
    return false;
  }

  if (middleName.value) {
    middleName.value = middleName.value
      .split(" ")
      .map(
        (word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
      )
      .join(" ");
  }

  firstName.value = firstName.value
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  lastName.value = lastName.value
    .split(" ")
    .map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  userData.value = {
    firstName: firstName.value,
    lastName: lastName.value,
    middleName: middleName.value,
    phone: phone.value,
    сlinic: сlinic.value,
    doctor: doctor.value,
  };

  return true;
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
