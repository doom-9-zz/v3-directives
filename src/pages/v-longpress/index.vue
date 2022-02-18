<script setup lang="ts">
const handle = () => {
  window.alert('long press')
}
</script>

<template>
  <h1>introduce</h1>
  <p>Keep clicking for a period of time and trigger the callback</p>
  <hr />
  <h1>example</h1>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
  <hr />
  <h1>code</h1>
  <pre>{{ `<script setup lang="ts">
const handle = () => {
  window.alert('long press')
}
</script>

<template>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
</template>` }}</pre>
</template>
