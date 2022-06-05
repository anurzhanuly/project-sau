<template>
    <ToolbarBase/>
</template>

<script>
import ToolbarBase from '@/components/ToolbarBase.vue';

export default {
  components: {
    ToolbarBase,
  },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 1200px;
    padding: 0 30px;
}
</style>
