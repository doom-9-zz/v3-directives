<script setup lang="ts">
const handle = () => {
  window.alert('long press')
}
</script>

<template>
  <div v-longpress:1000="handle">Stay with me for a long time</div>
</template>
