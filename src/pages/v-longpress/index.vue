<script setup lang="ts">
import { longPressDemo } from '../../const/const'
const handle = () => {
  window.alert('long press')
}
</script>

<template>
  <h1>Introduce</h1>
  <p>Keep clicking for a period of time and trigger the callback</p>
  <hr />
  <h1>Example</h1>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="longPressDemo" />
</template>
