<script setup lang="ts">
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<template>
  <button v-copy="value">Click my copy</button>
  <button
    @click="
      () => {
        value = 'Changed'
      }
    "
  >
    change value
  </button>
</template>

<style></style>
