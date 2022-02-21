<script setup lang="ts">
import { doubleClickDemo } from '../../const/const'

const handler = () => {
  window.alert('double click')
}
</script>
<template>
  <h1>Introduce</h1>
  <p>Double click to trigger callback</p>
  <hr />
  <h1>Example</h1>
  <button v-doubleclick:500="handler">double click</button>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="doubleClickDemo" />
</template>
