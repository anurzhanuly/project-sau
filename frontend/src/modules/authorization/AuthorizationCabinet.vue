<template>
  <div class="authorization-section">
    <div class="onboarding-main">
      <OnboardingSwiper />
    </div>
    <div class="authorization-main">
      <div class="link-back">
        <span>&lt;</span><a href="/">Назад</a>
      </div>
      <div class="authorization-wrapper p-fluid">
        <form class="authorization-form">
          <img src="src/assets/logo-auth.png" alt="Logo">
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
            label="Пройти тест"
            class="p-button"
            @click="goToSurvey"
          />
        </form>
      </div>
    </div>
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
import OnboardingSwiper from "@/modules/authorization/components/OnboardingSwiper.vue";

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
.authorization-section {
  display: flex;
  min-height: 100vh;
}
.onboarding-main {
  width: 40%;
  background-color: #AACCEB;
}
.link-back {
  position: absolute;
  top: 33px;
  margin-left: 33px;
}
.link-back span {
  color: #276EF1;
  font-weight: 600;
}
.link-back a {
  margin-left: 3px;
  color: #276EF1;
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
  color: #3F3F3F;
  font-weight: 400;
  margin-top: 15px;
  margin-bottom: 5px;
}

.authorization-wrapper span {
  color: #d0312d;
}

.authorization-form {
  width: 350px;
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
</style>
