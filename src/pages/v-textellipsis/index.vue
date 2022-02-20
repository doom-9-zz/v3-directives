<script setup lang="ts">
import { textEllipsisDemo } from '../../const/const'

const text =
  'There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream;go where you want to go;be what you want to be,because you have only one life and one chance to do all the things you want to do.'
</script>
<template>
  <h1>Introduce</h1>
  <p>Text beyond ellipsis</p>
  <hr />
  <h1>Example</h1>
  <div
    v-textellipsis:3
    :style="{
      width: '200px',
      height: '55px',
      border: '1px solid #ccc'
    }"
  >
    {{ text }}
  </div>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="textEllipsisDemo" />
</template>
