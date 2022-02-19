<script setup lang="ts">
import { focusDemo } from '../../const/const'
</script>
<template>
  <h1>Introduce</h1>
  <p>Auto focus on the specified element</p>
  <hr />
  <h1>Example</h1>
  <input v-focus />
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="focusDemo" />
</template>
