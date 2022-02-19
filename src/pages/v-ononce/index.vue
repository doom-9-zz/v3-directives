<script setup lang="ts">
const handler = () => {
  window.alert('Hello!')
}
</script>
<template>
  <h1>introduce</h1>
  <p>Execute the bound event only once</p>
  <hr />
  <h1>example</h1>
  <button v-ononce:click="handler">only alert once</button>
  <hr />
  <h1>code</h1>
  <pre>{{ `<script setup lang="ts">
const handler = () => {
  window.alert('Hello!')
}
</script>
<template>
  <button v-ononce:click="handler">only alert once</button>
</template>` }}</pre>
</template>
