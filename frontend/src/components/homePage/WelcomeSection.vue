<template>
  <section class="section-welcome">
    <div class="section-content">
      <div class="section-center">
        <h1 class="section-header">Что Вас беспокоит?</h1>
        <p class="text-large">
          Пройдите анализ своего здоровья и узнайте, что вам стоит пройти.
          Быстро, бесплатно и анонимно.
        </p>
        <RouterLink to="/test">
          <button class="btn">Пройти тест</button>
        </RouterLink>
      </div>
    </div>
    <div class="image-welcome"></div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.section-welcome {
  background-color: #1576d1;
  border-bottom: 1px solid #0962b5;
  overflow: hidden;
  position: relative;
  line-height: 1.7;
}

.section-welcome .section-content {
  margin: 0 0 20px;
  color: #fff;
  z-index: 2;
  position: relative;
  text-align: center;
  padding: 50px 32px 0 32px;
}

.section-welcome .image-welcome {
  z-index: 1;
  background-image: url("../../assets/welcome-small.svg");
  height: 212px;
  width: 304px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}

.text-large {
  font-size: 15px;
  margin: 0 auto;
  padding: 0 25px;
  min-height: 75px;
}

.btn {
  margin-top: 30px;
  padding: 12px 23px;
  background-color: #1ac98e;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  font-size: 14px;
}

.section-header {
  margin-bottom: 18px;
}

@media (min-width: 480px) {
  .text-large {
    min-height: 0;
  }

  .section-welcome .image-welcome {
    bottom: 0;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .section-welcome {
    height: 400px;
    min-height: 0;
  }

  .section-content {
    padding: 65px;
  }

  .section-welcome .section-content {
    margin-bottom: 0;
    padding-bottom: 79px;
    padding-top: 64px;
    text-align: inherit;
  }

  .section-welcome .section-content .section-center {
    position: absolute;
    top: 45%;
  }

  .section-welcome .image-welcome {
    right: 40px;
    left: auto;
  }

  .section-welcome .section-content .section-header {
    margin-bottom: 26px;
  }

  .section-welcome .image-welcome {
    position: absolute;
  }

  .section-welcome .section-content .section-header {
    font-size: 26px;
    line-height: 34px;
    margin-bottom: 18px;
  }

  .text-large {
    max-width: 315px;
    margin: 0;
    padding: 0;
  }
}

@media (min-width: 992px) {
  .section-welcome {
    border-radius: 5px 5px 0 0;
    height: 620px;
  }

  .section-content {
    padding: 80px;
  }

  .section-welcome .section-content {
    padding-bottom: 170px;
    padding-top: 170px;
  }

  .section-welcome .image-welcome {
    bottom: -45px;
    height: 584px;
    width: 685px;
    right: -50px;
  }

  .section-welcome .section-content .section-header {
    font-size: 35px;
    line-height: 47px;
    margin-bottom: 18px;
  }

  .text-large {
    font-size: 18px;
    max-width: 315px;
    margin: 0;
    padding: 0;
  }
}

@media (min-width: 1200px) {
  .section-content {
    padding: 100px;
  }

  .section-welcome .image-welcome {
    background-position: 60px 0;
    bottom: auto;
    height: 730px;
    top: 25px;
    width: 856px;
    right: 0;
  }
}
</style>
