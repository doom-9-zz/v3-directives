<script setup lang="ts">
const handle = () => {
  window.alert('I was executed')
}
</script>

<template>
  <h1>introduce</h1>
  <p>Prevent continuous execution of incoming callbacks</p>
  <hr />
  <h1>example</h1>
  <button v-debounce:click-1000="handle">Quick click on me</button>
  <hr />
  <h1>code</h1>
  <pre>{{ `<script setup lang="ts">
const handle = () => {
  window.alert('I was executed')
}
</script>

<template>
  <button v-debounce:click-1000="handle">Quick click on me</button>
</template>` }}</pre>
</template>

<style></style>
