<template>
    <section class="section-welcome">
        <div class="section-content">
            <div class="section-center">
                <h1 class="section-header">Что беспокоит вас<br> по поводу вашего здоровья?</h1>
                <p class="text-large">Проверьте свои симптомы и узнайте, что может быть их причиной.
                    Это быстро, бесплатно и анонимно.</p>
                <router-link to="/test">
                    <button class="btn">Пройти тест</button>
                </router-link>
            </div>
        </div>
        <div class="image-welcome"></div>
    </section>
</template>

<script>
export default {
  name: 'WelcomeSection',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}

.section-welcome .image-welcome {
    z-index: 1;
    position: absolute;
}

.section-welcome .section-content .section-header {
    font-size: 35px;
    line-height: 47px;
    margin-bottom: 18px;
}

.section-welcome .section-content p {
  margin: 0 auto;
  padding: 0 25px;
  min-height: 75px;
}

.text-large {
  font-size: 18px;
}

.btn {
    margin: 20px 0;
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

@media (min-width: 480px) {
    .section-welcome .section-content p {
        min-height: 0;
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
        right: -55px;
    }

    .section-welcome .section-content .section-header {
        margin-bottom: 26px;
    }

    .section-welcome .section-content p {
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
        background-image: url("../../assets/welcome.svg");
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: contain;
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
