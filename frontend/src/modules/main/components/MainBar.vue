<template>
  <div class="main-content">
    <h1>Что Вас беспокоит?</h1>
    <h3>
      Пройдите опрос, узнайте <br />о состоянии вашего здоровья<br />
      и начните приём с нами
    </h3>

    <div class="main-content-buttons">
      <p-button label="Пройти тест" @click="goToAuthorization" />
      <p-button label="Войти в личный кабинет" class="p-button-outlined" @click="goToSignin" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useSurveyStore } from "../../survey/store/survey.store.js";
import { useRouter } from "vue-router";

import PButton from "primevue/button";

const router = useRouter();
const surveyStore = useSurveyStore();

onMounted(() => {
  surveyStore.getQuestionsData();
});

const isMobileDevice = computed(() => /Mobi/.test(navigator.userAgent));

const goToAuthorization = () => {
  isMobileDevice.value ? 
  router.push({
    path: "/onboarding",
  }) :
  router.push({
    path: "/signup",
  });
};

const goToSignin = () => {
  router.push({
    path: "/signin",
  });
};
</script>

<style>
.main-content {
  padding-top: 200px;
}

.main-content h3 {
  font-size: 40px;
  font-weight: 600;
  line-height: 37px;
  letter-spacing: 0px;
  margin-top: 15px;
}

.main-content h1 {
  font-size: 80px;
  font-weight: 700;
  line-height: 61px;
  letter-spacing: 0px;
}

.main-content-buttons {
  display: flex;
  flex-direction: column;
}

.main-content-buttons .p-button {
  width: 520px;
  font-size: 22px;
  background: #276ef1;
  border-radius: 10px;
  margin-top: 25px;
}

.main-content-buttons .p-button:last-child {
  background-color: #ffffff;
}

@media (max-width: 1100px) {
  .main-content h1 {
    font-size: 60px;
  }

  .main-content h3 {
    font-size: 30px;
  }

  .main-content {
    padding-top: 280px;
  }
}

@media (max-width: 800px) {
  .main-content h1 {
    font-size: 40px;
  }

  .main-content h3 {
    font-size: 30px;
  }

  .main-content-buttons .p-button {
    width: 329px;
  }
}

@media (max-width: 480px) {
  .main-content h1 {
    font-size: 25px;
    line-height: 17px;
  }

  .main-content h3 {
    font-size: 20px;
    line-height: 17px;
  }

  .main-content-buttons .p-button {
    width: 100%;
    margin-top: 7px;
  }

  .main-content {
    padding-top: 390px;
  }

  .main-content-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
