<template>
  <section class="section-info">
    <div class="section-content">
      <div class="info">
        <div class="image-book"></div>
        <p class="info-text">
          72% интернет-пользователей ищут информацию о здоровье в сети
        </p>
      </div>
      <p class="info-source">
        Источник: Pew Research Center’s Internet &amp; American Life Project,
        Health Online, 2013
      </p>
    </div>
  </section>
</template>

<style>
.info {
  background-color: #fff;
  border: 1px solid #dee3e8;
  border-radius: 5px;
  box-shadow: 0 11px 10px -12px rgb(42 55 67 / 15%);
  color: #2a3743;
  display: inline-block;
  position: relative;
}

.image-book {
  background-image: url('../../assets/info-icon.svg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 46px;
  position: absolute;
  top: -25px;
  width: 36px;
  right: 30px;
}

.info-text {
  margin: 32px;
  font-size: 22px;
  font-weight: 700;
}

.section-content {
  padding: 50px 32px 32px;
}

.info-source {
  padding: 20px 59px 15px 29px;
  color: #acb7c1;
}

@media (min-width: 768px) {
  .section-content {
    padding: 40px 80px 25px 80px;
  }

  .image-book {
    bottom: 0;
    display: inline-block;
    top: 0;
    margin: auto;
    left: 30px;
    right: auto;
  }

  .info-text {
    margin: 32px 32px 32px 95px;
  }
}

@media (min-width: 992px) {
  .section-content {
    padding: 65px 80px 40px 80px;
  }

  .info-text {
    font-size: 26px;
  }
}
</style>
