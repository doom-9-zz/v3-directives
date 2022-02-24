# Introduce

### Copy incoming values

# Example

<script setup >
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

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

# Code

```js
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<template>
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
</template>
```
