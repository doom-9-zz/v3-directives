<script setup lang="ts">
const handle = () => {
  window.alert('long press')
}
</script>

<template>
  <h1>example</h1>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
  <hr />
</template>
