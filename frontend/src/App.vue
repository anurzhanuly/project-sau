<template>
    <div class="wrapper">
        <ToolbarBase/>
        <main class="main"><router-view/></main>
        <FooterBase/>
    </div>
</template>

<script>
import ToolbarBase from '@/components/ToolbarBase.vue';
import FooterBase from '@/components/FooterBase.vue';

export default {
  components: {
    ToolbarBase,
    FooterBase,
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #f5f7f9;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.wrapper {
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
