<template>
  <div class="authorization-section">
    <div class="onboarding-main">
      <base-swiper />
    </div>
    <div class="authorization-main">
      <div class="link-back"><span>&lt;</span><a href="/">Назад</a></div>
      <div class="authorization-wrapper p-fluid">
        <form v-if="isSignupRoute" class="authorization-form">
          <base-logo-image />
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
          <p-button label="Пройти тест" class="p-button" @click="goToSurvey" />
        </form>
        <form v-if="!isSignupRoute" class="authorization-form">
          <base-logo-image />
          <div>
            <h4>Номер телефона <span>*</span></h4>
            <input-text v-model="loginPhone" />
          </div>
          <div>
            <h4>Пароль <span>*</span></h4>
            <input-text v-model="password" type="password" />
          </div>
          <p-button label="Вход" class="p-button" @click="goToPatientCab" />
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
import BaseLogoImage from "@/components/BaseLogoImage.vue";

const router = useRouter();
const route = useRoute();
const clinicStore = useClinicsStore();

onMounted(() => {
  clinicStore.getClinicsData();
  clinicStore.getDoctorsData();
});

const isSignupRoute = computed(() => route.path === "/signup");

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

<style scoped>
.authorization-section {
  display: flex;
  min-height: 100vh;
}
.onboarding-main {
  width: 40%;
  background-color: rgba(170, 204, 235, 0.4);
}
.link-back {
  position: absolute;
  top: 33px;
  margin-left: 33px;
}
.link-back span {
  color: #276ef1;
  font-weight: 600;
}
.link-back a {
  margin-left: 3px;
  color: #276ef1;
  text-decoration: underline;
}
.authorization-main {
  width: 60%;
  margin: auto;
}
.authorization-wrapper {
  display: flex;
  justify-content: center;
}
.authorization-wrapper h4 {
  color: #3f3f3f;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 5px;
}

.authorization-wrapper span {
  color: #d0312d;
}

.authorization-form {
  width: 50%;
}

.authorization-form img {
  margin-bottom: 20px;
}

.p-button {
  margin: 20px 0;
  height: 56px;
  font-weight: 600;
  border-radius: 10px;
}

@media only screen and (max-width: 375px) {
  .authorization-section {
    min-height: 120vh;
  }
  .onboarding-main {
    display: none;
  }

  .link-back {
    top: 20px;
    left: 20px;
    margin: 0;
  }
  .authorization-main,
  .authorization-form {
    width: 95%;
  }
}

@media (min-width: 376px) and (max-width: 600px) {
  .authorization-section {
    min-height: 100vh;
  }
  .onboarding-main {
    display: none;
  }

  .link-back {
    top: 20px;
    left: 20px;
    margin: 0;
  }
  .authorization-main,
  .authorization-form {
    width: 95%;
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  .authorization-main {
    margin: 50px 0;
  }
}
</style>
