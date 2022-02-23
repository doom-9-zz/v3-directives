# Introduce

### Execute the bound event only once

# Example

<script setup>
const handler = () => {
  window.alert('Hello!')
}
</script>

<button v-ononce:click="handler">only alert once</button>

# Code

```js
<script setup lang="ts">
const handler = () => {
  window.alert('Hello!')
}
</script>
<template>
  <button v-ononce:click="handler">only alert once</button>
</template>
```
