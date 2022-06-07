<template>
    <footer class="header">
        <router-link to="/">
            <div class="logo"></div>
        </router-link>
    </footer>
</template>

<script>
export default {
  name: 'FooterBase',
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    margin-top: auto;
}

.logo {
    background-image: url("../assets/logo.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 200px;
}
</style>
