<template>
  <footer class="footer">
    <div class="footer-content">
      <p>
        <i class="pi pi-phone" style="margin-right: 5px" />
        <a href="tel:+77773771515">+7 (777) 377-15-15</a>
      </p>
      <p>
        <i class="pi pi-at" style="margin-right: 5px" />
        <a href="mailto:symptom.kz@gmail.com">symptom.kz@gmail.com</a>
      </p>
      <p>
        <i class="pi pi-instagram" style="margin-right: 5px" />
        <a href="">symptom.kz</a>
      </p>
      <p @click="openAdminLoginPopup">Админ</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import AdminLogin from "../popup/AdminLogin.vue";
import { useDialog } from "primevue/usedialog";

const dialog = useDialog();

function openAdminLoginPopup(): void {
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
</script>

<style>
.footer {
  margin: 0 180px;
}

.footer-content {
  padding-top: 15px;
}

.footer-content p {
  margin-top: 5px;
}

@media (max-width: 770px) {
  .footer {
    margin: 0 60px;
  }
}

@media (max-width: 480px) {
  .footer {
    margin: 0 15px;
  }
}
</style>
