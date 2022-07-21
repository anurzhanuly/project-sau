<template>
  <footer class="footer">
    <div class="footer__logo"></div>
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
}

.footer__logo {
  background-image: url("../assets/mini-logo.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60px;
  width: 60px;
}

@media (min-width: 992px) {
  .footer {
    border-top: 1px solid #dee3e8;
    padding: 50px 0 40px;
  }
}
</style>
