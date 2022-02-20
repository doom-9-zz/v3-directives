<script setup lang="ts">
import { moneyDemo } from '../../const/const'
</script>
<template>
  <h1>Introduce</h1>
  <p>format numbers</p>
  <hr />
  <h1>Example</h1>
  <span v-money="123456789.123456"></span>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="moneyDemo" />
</template>
