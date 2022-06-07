<template>
    <header class="header">
        <router-link to="/">
            <div class="logo"></div>
        </router-link>
    </header>
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
    align-items: center;
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
