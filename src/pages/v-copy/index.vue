<script setup lang="ts">
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<template>
  <h1>example</h1>
  <p>Value to be copied:{{ value }}</p>
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
  <hr />
</template>

<style></style>
