<template>
    <section class="section-info">
        <div class="section-content">
            <div class="info">
                <div class="image-book"></div>
                <p class="info-text">72% интернет-пользователей ищут информацию
                    о здоровье в сети</p>
            </div>
            <div class="info-source"></div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'InfoSection',
};
</script>

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
    background-image: url("../../assets/info-icon.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
}

@media (min-width: 768px) {
    .section-content {
        padding: 40px 80px 25px 80px;
    }
}

@media (min-width: 992px) {
    .section-content {
        padding: 65px 80px 40px 80px;
    }
}
</style>
