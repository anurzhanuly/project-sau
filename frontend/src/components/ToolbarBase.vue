<template>
    <header class="header">
        <router-link to="/">
            <img class="logo" src="../assets/logo.png" alt="logo">
        </router-link>
        <nav>
            <router-link to="/test">Test</router-link> |
            <router-link to="/admin">Админка</router-link>
        </nav>
    </header>
    <router-view/>
</template>

<script>
export default {
  name: 'ToolbarBase',
};
</script>

<style>
    .header {
        display: flex;
        justify-content: space-around;
        height: 80px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .logo {
        height: 80px;
        width: 100%;
    }
</style>
