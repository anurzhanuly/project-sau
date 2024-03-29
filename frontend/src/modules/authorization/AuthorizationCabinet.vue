<template>
  <div class="authorization-section">
    <div class="onboarding-main">
      <base-swiper />
    </div>
    <div class="authorization-main">
      <div class="link-back" @click="$router.push('/')">
        <span>&lt; Назад</span>
      </div>
      <div class="authorization-wrapper p-fluid">
        <form v-if="isSignupRoute" class="authorization-form">
          <img src="@/assets/main/logo-auth.png" alt="Symptom logo" />
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
              :options="clinics"
              option-value="attributes.name"
              option-label="attributes.name"
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
              :options="doctorsFIO"
              option-value="id"
              option-label="name"
              filter-placeholder="Поиск"
              filter
              lazy
              :empty-filter-message="'Ничего не найдено'"
              :empty-message="'Ничего не найдено'"
            />
          </div>
          <p-button label="Пройти тест" @click="goToSurvey" />
        </form>
        <form v-if="!isSignupRoute" class="authorization-form">
          <img src="@/assets/main/logo-auth.png" alt="Symptom logo" />
          <div>
            <h4>Номер телефона <span>*</span></h4>
            <input-text v-model="loginPhone" />
          </div>
          <div>
            <h4>Пароль <span>*</span></h4>
            <input-text v-model="password" type="password" />
          </div>
          <p-button label="Вход" @click="goToPatientCab" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClinicsStore } from "@/modules/admin/views/clinics/store/clinics.store";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { warn } from "@/utils/toast";

import PButton from "primevue/button";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import { storeToRefs } from "pinia";
import BaseSwiper from "@/components/BaseSwiper.vue";

const router = useRouter();
const route = useRoute();
const clinicStore = useClinicsStore();

onMounted(() => {
  clinicStore.getClinicsData();
  clinicStore.getDoctorsData();
});

const isSignupRoute = computed(() => route.path === "/clientSignup");

const { clinics, doctorsFIO } = storeToRefs(clinicStore);

const firstName = ref<string>("");
const lastName = ref<string>("");
const middleName = ref<string>("");
const phone = ref<string>("");
const сlinic = ref<string>("");
const doctor = ref<string>("");
const loginPhone = ref<string>("");
const password = ref<string>("");
const userRegisterData = ref<any>({});
const userLoginData = ref<any>({});

const goToSurvey = (): void => {
  if (validateRegisterForm()) {
    router.push({
      path: "/survey",
    });
  }
};

const goToPatientCab = (): void => {
  if (validateLoginForm()) {
    router.push({
      path: "/patientcab/main",
    });
  }
};

const validateRegisterForm = (): boolean => {
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

  userRegisterData.value = {
    firstName: firstName.value,
    lastName: lastName.value,
    middleName: middleName.value,
    phone: phone.value,
    сlinic: сlinic.value,
    doctor: doctor.value,
  };

  return true;
};

const validateLoginForm = (): boolean => {
  const phonePattern = /^8[0-9]{10}$/;

  if (!phonePattern.test(phone.value)) {
    warn(
      "Внимание",
      "Номер телефона' должен начинаеться с 8 и иметь 11 символов",
    );
    return false;
  }

  userLoginData.value = {
    loginPhone: loginPhone.value,
    password: password.value,
  };

  return true;
};
</script>

<style>
@import "./styles/authorization.css";
</style>
