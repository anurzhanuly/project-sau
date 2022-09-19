<template>
  <footer class="footer">
    <img src="../assets/symptom.png" alt="logo" height="20" width="100" class="footer__logo" />
    <div class="footer__contacts">
      <p>Контакты для связи:</p>
      <p>Телефон: <a href="tel:+77773771515">+7 (777) 377-15-15</a></p>
      <p>
        Почта: <a href="mailto:symptom.kz@gmail.com">symptom.kz@gmail.com</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid #dee3e8;
  padding: 50px 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
