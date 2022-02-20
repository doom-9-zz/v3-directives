<script setup lang="ts">
import { hoverDemo } from '../../const/const'

const handler = () => {
  window.alert('hover')
}
</script>
<template>
  <h1>Introduce</h1>
  <p>Trigger callback when hover element</p>
  <hr />
  <h1>Example</h1>
  <div
    v-hover="handler"
    :style="{
      width: '200px',
      height: '200px',
      border: '1px solid #ccc'
    }"
  >
    Hover
  </div>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="hoverDemo" />
</template>
