<template>
    <header class="header">
        <router-link to="/">
            <div class="logo"></div>
        </router-link>
        <router-link to="/test">
            <button class="btn">Тест</button>
        </router-link>
    </header>
    <router-view/>
</template>

<script>
export default {
  name: 'ToolbarBase',
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    padding: 0 30px;
}

.logo {
    background-image: url("../assets/logo.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 200px;
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
</style>
