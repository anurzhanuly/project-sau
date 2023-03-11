<template>
  <div class="main-info">
    <div class="main-info-container">
      <card>
        <template #header>
          <img src="@/assets/logo.png" />
        </template>
        <template #title> <h3>Условия использования</h3> </template>
        <template #content>
          <p>Дорогой пациент!</p>
          <ul>
            <li>
              <div>
                &bull;
                <strong>
                  Данный опрос и результаты не является диагностикой, лечением и
                  заменой врача.
                </strong>
                Оно предназначено исключительно для общего сведения и не
                является квалифицированным медицинским заключением.
              </div>
            </li>
            <li>
              <div>
                &bull;
                <strong>
                  Это обследование не предназначено для экстренных случаев.
                </strong>
                В случае неотложного состояния немедленно позвоните 103
              </div>
            </li>
            <!-- <li>
              <div>
                &bull;
                <strong>Ваши данные в безопасности.</strong>
                Предоставленная Вами информация не будет передана или
                использована с целью разгласить ваши личные данные.
              </div>
            </li> -->
            <li>
              <div>Мне есть 18 лет</div>
            </li>
          </ul>
          <div class="main-info-check">
            <checkbox v-model="isUse" :binary="true" />
            <span>Я прочитал(а) и принимаю</span>
            <p @click="termsOfUse = true">Условия использования.</p>
            <div v-if="isNotUse" class="main-info-check-circle">
              <i
                class="pi pi-info-circle"
                style="color: red; margin-right: 3px"
              />
              <span>Примите Условия использования.</span>
            </div>
          </div>
          <div class="main-info-check">
            <checkbox v-model="isProvicy" :binary="true" />
            <span
              >Я соглашаюсь на использование информации о моем здоровье для
              прохождения опроса. Полная информация доступна в
              <p @click="privacyPolicy = true">
                Политика конфиденциальности.
              </p></span
            >
            <div v-if="isNotPrivacy" class="main-info-check-circle">
              <i
                class="pi pi-info-circle"
                style="color: red; margin-right: 3px"
              />
              <span
                >Пожалуйста, согласитесь с Политикой конфиденциальности и
                обработкой информации о ваших персональных медицинских
                данных.</span
              >
            </div>
          </div>
          <hr />
          <div class="main-info-actions">
            <p-button
              label="Назад"
              class="p-button-outlined"
              @click="$router.push('/')"
            />
            <p-button label="Начать тест" @click="checkAgreement" />
          </div>
        </template>
      </card>
    </div>
  </div>

  <sidebar v-model:visible="termsOfUse" position="right" style="width: 45%">
    <div class="sidebar-header">
      <h1>Условия использования</h1>
      <h3>Последнее обновление: 19.09.2022</h3>
    </div>
  </sidebar>

  <sidebar v-model:visible="privacyPolicy" position="right" style="width: 45%">
    <div class="sidebar-header">
      <h1>Политика конфиденциальности</h1>
      <h3>Последнее обновление: 19.09.2022</h3>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </sidebar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

import PButton from "primevue/button";
import Checkbox from "primevue/checkbox";
import Card from "primevue/card";
import Sidebar from "primevue/sidebar";

const router = useRouter();

const isUse = ref<boolean>(false);
const isProvicy = ref<boolean>(false);
const isNotUse = ref<boolean>(false);
const isNotPrivacy = ref<boolean>(false);

const termsOfUse = ref<boolean>(false);
const privacyPolicy = ref<boolean>(false);

function checkAgreement(): void {
  if (!isUse.value && !isProvicy.value) {
    isNotUse.value = true;
    isNotPrivacy.value = true;
    return;
  }

  if (!isUse.value) {
    isNotUse.value = true;
    return;
  }

  if (!isProvicy.value) {
    isNotPrivacy.value = true;
    return;
  }

  router.push({
    path: "/survey",
  });
}
</script>

<style>
.main-info-container {
  padding: 20px 530px;
  background-color: #e4edfd;
  height: 100vh;
}

.main-info-container p {
  margin-bottom: 15px;
  font-size: 18px;
}

.main-info-container ul {
  font-size: 17px;
}

.main-info-container li {
  margin-top: 10px;
}

.main-info-container .p-card-header img {
  margin: 15px 15px 45px 15px;
  width: 40%;
}

.main-info-container hr {
  margin-top: 10px;
}

.main-info-check {
  width: 40%;
  margin-top: 10px;
}

.main-info-check p,
.main-info-check strong,
.main-info-check span {
  font-size: 18px;
}

.main-info-check .p-checkbox {
  margin-right: 5px;
}

.main-info-check p {
  color: #1769aa;
  cursor: pointer;
}

.main-info-check-circle span {
  color: #ff4032;
}

.main-info-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.main-info-actions .p-button {
  width: 200px;
}

.sidebar-header {
  margin-bottom: 15px;
}

@media (max-width: 1875px) {
  .main-info-container {
    padding: 20px 500px;
  }

  .main-info-container .p-card-header img {
    margin: 15px 15px 0px 15px;
    width: 40%;
  }

  .main-info-check {
    width: 70%;
  }
}

@media (max-width: 1650px) {
  .main-info-container {
    padding: 20px 400px;
  }
}

@media (max-width: 1650px) {
  .main-info-container {
    padding: 20px 350px;
  }
}

@media (max-width: 1350px) {
  .main-info-container {
    padding: 20px 300px;
  }
}

@media (max-width: 1250px) {
  .main-info-container {
    padding: 20px 250px;
  }
}

@media (max-width: 1150px) {
  .main-info-container {
    padding: 20px 180px;
  }

  .main-info-check {
    width: 80%;
  }
}

@media (max-width: 950px) {
  .main-info-container {
    padding: 20px 150px;
  }

  .main-info-check {
    width: 90%;
  }
}

@media (max-width: 880px) {
  .main-info-container {
    padding: 10px 100px;
  }

  .main-info-check {
    width: 90%;
  }
}

@media (max-width: 750px) {
  .main-info-container {
    padding: 10px 60px;
  }

  .main-info-check {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .main-info-container {
    padding: 10px 40px;
  }
}

@media (max-width: 700px) {
  .main-info-container {
    padding: 5px 40px;
  }
}

@media (max-width: 560px) {
  .main-info-container {
    padding: 5px 10px;
  }
}

@media (max-width: 480px) {
  .main-info-check p,
  .main-info-check strong,
  .main-info-check span {
    font-size: 16px;
  }

  .main-info-container p {
    font-size: 17px;
  }

  .main-info-container ul {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .main-info-container h3 {
    font-size: 22px;
  }
}

@media (max-width: 380px) {
  .main-info-container {
    padding: 5px 5px;
  }

  .main-info-container h3 {
    font-size: 20px;
  }

  .main-info-container p {
    margin-bottom: 5px;
  }

  .main-info-check p,
  .main-info-check strong,
  .main-info-check span {
    font-size: 15px;
  }

  .main-info-container ul {
    font-size: 15px;
  }

  .main-info-container hr {
    margin-top: 5px;
  }

  .main-info-actions {
    margin-top: 15px;
  }
}

@media (max-width: 330px) {
  .main-info-container {
    padding: 0px 0px;
  }
}
</style>
