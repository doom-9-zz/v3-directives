<script setup lang="ts">
import { draggableDemo } from '../../const/const'
</script>
<template>
  <h1>Introduce</h1>
  <p>drag element</p>
  <hr />
  <h1>Example</h1>
  <div
    v-draggable
    :style="{
      width: '100px',
      height: '100px',
      background: 'green',
      transform: 'translateX(50px)'
    }"
  >
    I can drag
  </div>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="draggableDemo" />
</template>
