<script setup lang="ts">
import { debounceDemo } from '../../const/const'
const handle = () => {
  window.alert('I was executed')
}
</script>

<template>
  <h1>Introduce</h1>
  <p>Prevent continuous execution of incoming callbacks</p>
  <hr />
  <h1>Example</h1>
  <button v-debounce:click-1000="handle">Quick click on me</button>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="debounceDemo" />
</template>

<style></style>
