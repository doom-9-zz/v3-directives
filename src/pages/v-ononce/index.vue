<script setup lang="ts">
import { onOnceDemo } from '../../const/const'
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
  <highlightjs language="js" :code="onOnceDemo" />
</template>
