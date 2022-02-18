<script setup lang="ts">
const handle = () => {
  window.alert('I was executed')
}
</script>

<template>
  <h1>example</h1>
  <button v-debounce:click-1000="handle">Quick click on me</button>
  <hr />
</template>

<style></style>
