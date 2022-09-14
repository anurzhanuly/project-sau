<template>
  <Steps :model="items" />
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
const items = ref([
  {
    label: 'Personal',
    to: '/result'
  },
  {
    label: 'Seat',
    to: '/survey'
  },
  {
    label: 'Payment',
    to: '/steps/payment'
  },
  {
    label: 'Confirmation',
    to: '/steps/confirmation'
  }
]);
</script>
