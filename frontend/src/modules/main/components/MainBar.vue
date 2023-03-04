<template>
  <div class="main-content">
    <h1>Что Вас беспокоит?</h1>
    <h3>
      Пройдите опрос, узнайте <br />о состоянии вашего здоровья<br />
      и начните приём с нами
    </h3>
    <div class="main-content-buttons">
      <p-button label="Пройти тест" @click="goToAuthorization" />
      <p-button
        label="Войти в личный кабинет"
        class="p-button-outlined"
        @click="$router.push('/clientSignin')"
      />
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

const isMobileDevice = computed(
  () => /Mobi/.test(navigator.userAgent) && !/iPad/.test(navigator.userAgent),
);
console.log(isMobileDevice.value);

const goToAuthorization = (): void => {
  isMobileDevice.value
    ? router.push({
        path: "/onboarding",
      })
    : router.push({
        path: "/clientSignup",
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
  margin-top: 15px;
}

.main-content-buttons .p-button:last-child {
  background-color: #ffffff;
}

@media (max-width: 1500px) {
  .main-content h1 {
    font-size: 40px;
  }

  .main-content h3 {
    font-size: 25px;
  }

  .main-content {
    padding-top: 250px;
  }

  .main-content-buttons .p-button {
    width: 329px;
  }
}

@media (max-width: 1100px) {
  .main-content h1 {
    font-size: 40px;
  }

  .main-content h3 {
    font-size: 25px;
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
}

@media (max-width: 480px) {
  .main-content h1 {
    font-size: 32px;
    line-height: 15px;
  }

  .main-content h3 {
    font-size: 20px;
    line-height: 25px;
  }

  .main-content-buttons .p-button {
    width: 100%;
    margin-top: 20px;
  }

  .main-content {
    padding-top: 320px;
  }

  .main-content-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 350px) {
  .main-content h1 {
    font-size: 25px;
  }

  .main-content h3 {
    font-size: 18px;
  }
}
</style>
