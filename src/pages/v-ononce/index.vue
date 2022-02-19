<script setup lang="ts">
import { onOnceDemo } from '../../const/const'
const handler = () => {
  window.alert('Hello!')
}
</script>
<template>
  <h1>Introduce</h1>
  <p>Execute the bound event only once</p>
  <hr />
  <h1>Example</h1>
  <button v-ononce:click="handler">only alert once</button>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="onOnceDemo" />
</template>
