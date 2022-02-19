<script setup lang="ts">
import { ref } from 'vue'
import { copyDemo } from '../../const/const'

const value = ref('You are about to copy these values')
</script>

<template>
  <h1>introduce</h1>
  <p>Copy incoming values</p>
  <hr />
  <h1>example</h1>
  <p>Value to be copied:{{ value }}</p>
  <button v-copy="value">click me to copy</button>
  <button
    @click="
      () => {
        value = 'Changed'
      }
    "
  >
    change the value to be copied
  </button>
  <input type="text" placeholder="paste here" />
  <hr />
  <h1>code</h1>
  <highlightjs language="js" :code="copyDemo" />
</template>

<style></style>
