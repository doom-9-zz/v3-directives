<script setup lang="ts">
import { focusDemo } from '../../const/const'
</script>
<template>
  <h1>introduce</h1>
  <p>Auto focus on the specified element</p>
  <hr />
  <h1>example</h1>
  <input v-focus />
  <hr />
  <h1>code</h1>
  <highlightjs language="js" :code="focusDemo" />
</template>
