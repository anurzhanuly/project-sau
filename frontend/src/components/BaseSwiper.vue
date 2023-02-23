<template>
  <main class="container">
    <swiper
      :modules="[Pagination, Autoplay]"
      :pagination="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="swiper-img">
          <img :src="`/${item.photo}`" alt="logo" />
        </div>
        <div class="swiper-text">
          <div>
            <p class="swiper-heading">{{ item.heading }}</p>
          </div>
          <div>
            <p class="swiper-inner-text">{{ item.innerText }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    photo: "onboard1.png",
    heading: "Узнайте причины жалоб",
    innerText:
      "Результаты опросника помогут определиться с нужным специалистом и записаться на приём",
  },
  {
    photo: "onboard2.png",
    heading: "Получите список необходимых анализов",
    innerText:
      "Экономьте время и приходите на первый прием уже с результатами анализов",
  },
  {
    photo: "onboard3.png",
    heading: "Пройдите опросник и получите первичные рекомендации",
    innerText:
      "Вопросы составлены профессиональными врачами, ответы помогут определить твое состояние",
  },
];
</script>

<style>
.swiper {
  min-height: 100vh;
}
.swiper-img {
  margin-top: 116px;
}
.swiper-slide img {
  width: 95%;
  height: 100%;
}
.swiper-text {
  max-width: 500px;
  margin: auto;
  margin-top: 24px;
}
.swiper-heading {
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  text-align: center;
}
.swiper-inner-text {
  text-align: center;
  font-size: 18px;
  margin-top: 23px;
}
.swiper-pagination-bullets {
  position: relative;
  margin-top: 56px;
  margin-bottom: 88px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #276ef1;
  opacity: 30%;
}
.swiper-pagination-bullet-active {
  opacity: 1;
}

@media only screen and (max-width: 375px) {
  .swiper {
    min-height: 80vh;
    width: 80%;
  }
  .swiper-img {
    margin-top: 80px;
  }
  .swiper-text {
    max-width: 380px;
    margin-top: 0;
  }
  .swiper-pagination-bullets {
    margin-top: 24px;
    margin-bottom: 0;
}
  .swiper-heading {
    font-size: 1.5rem;
  }
  .swiper-inner-text {
    font-size: 1rem;
  }
}

@media (min-width: 376px) and (max-width: 600px) {
  .swiper {
    min-height: 80vh;
  }
  .swiper-text {
    max-width: 350px;
  }
  .swiper-pagination-bullets {
    margin-top: 24px;
    margin-bottom: 0;
}
  .swiper-heading {
    font-size: 1.5rem;
  }
  .swiper-inner-text {
    font-size: 1rem;
  }
}

@media (min-width: 601px) and (max-width: 1024px) {
  .swiper {
    min-height: 120vh;
  }
  .swiper-heading {
    font-size: 1.5rem;
  }
  .swiper-inner-text {
    font-size: 1rem;
  }
}

@media (min-width: 1025px) and (max-width: 1100px) {
  .swiper-img {
    margin-top: 56px;
  }
}
</style>
