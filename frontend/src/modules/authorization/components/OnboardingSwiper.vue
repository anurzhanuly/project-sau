<template>
    <main class="container">
        <Swiper :modules="[Pagination, Autoplay]" 
        :pagination="true" :autoplay='{
            delay: 3000,
            disableOnInteraction: false
            }'>
            <SwiperSlide v-for="item in items">
                <div class="swiper-img">
                    <img :src="`src/assets/${item.photo}`" alt="">
                </div>
                <div class="swiper-text">
                    <div>
                        <p class="swiper-heading">{{ item.heading }}</p>
                    </div>
                    <div>
                        <p class="swiper-inner-text">{{ item.innerText }}</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
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
        innerText: "Результаты опросника помогут определиться с нужным специалистом и записаться на приём",
    },
    {
        photo: "onboard2.png",
        heading: "Получите список необходимых анализов",
        innerText: "Экономьте время и приходите на первый прием уже с результатами анализов",
    },
    {
        photo: "onboard3.png",
        heading: "Пройдите опросник и получите первичные рекомендации",
        innerText: "Вопросы составлены профессиональными врачами, ответы помогут определить твое состояние"
    },
]
</script>

<style>
.swiper {
    width: 100%;
    height: 100vh;
}
.swiper-img {
    margin-top: 124px;
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
    margin-bottom: 60px;
}
.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #276EF1;
    opacity: 30%;
}
.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>