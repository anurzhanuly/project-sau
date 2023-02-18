<template>
  <footer class="footer">
    <div class="footer__logo" />
    <div>
      <p>Контакты для связи:</p>
      <p>Телефон: <a href="tel:+77773771515">+7 (777) 377-15-15</a></p>
      <p>
        Почта: <a href="mailto:symptom.kz@gmail.com">symptom.kz@gmail.com</a>
      </p>
      <p @click="openAdminLoginPopup">Админ</p>
      <p @click="openCabinetLoginPopup">Кабинет врача</p>
    </div>
  </footer>
  <dynamic-dialog />
  <p-toast />
</template>

<script lang="ts" setup>
import AdminLogin from "../popup/AdminLogin.vue";
import CabinetLogin from "../popup/CabinetLogin.vue";

import { useDialog } from "primevue/usedialog";
import DynamicDialog from "primevue/dynamicdialog";
import PToast from "primevue/toast";

const dialog = useDialog();

function openAdminLoginPopup() {
  dialog.open(AdminLogin, {
    props: {
      header: "Введите логин и пароль",
      style: {
        width: "25%",
      },
      modal: true,
    },
  });
}

function openCabinetLoginPopup() {
  dialog.open(CabinetLogin, {
    props: {
      header: "Введите логин и пароль",
      style: {
        width: "25%",
      },
      modal: true,
    },
  });
}
</script>

<style scoped>
.footer {
  border-top: 1px solid #dee3e8;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__logo {
  background-image: url("@/assets/symptom.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 100px;
}

@media (max-width: 480px) {
  .footer__logo {
    display: none;
  }
}

@media (min-width: 992px) {
  .footer {
    border-top: 1px solid #dee3e8;
    padding: 50px 0 40px;
  }
}
</style>
