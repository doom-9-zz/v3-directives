<script setup lang="ts">
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<template>
  <h1>introduce</h1>
  <p>Copy incoming values</p>
  <hr />
  <h1>example</h1>
  <p>Value to be copied:{{ value }}</p>
  <button v-copy="value">Click my copy</button>
  <button
    @click="
      () => {
        value = 'Changed'
      }
    "
  >
    change value
  </button>
  <input type="text" />
  <hr />
  <h1>code</h1>
  <pre>{{ `
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<template>
  <button v-copy="value">Click my copy</button>
  <button
    @click="
      () => {
        value = 'Changed'
      }
    "
  >
    change value
  </button>
</template>` }}</pre>
</template>

<style></style>
