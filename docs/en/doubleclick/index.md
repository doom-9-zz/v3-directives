# Introduce

### Double click to trigger callback

# Example

<script setup>

const handler = () => {
  window.alert('double click')
}
</script>

<button v-doubleclick:500="handler">double click</button>

# Code

```html
<script setup lang="ts">
  const handler = () => {
    window.alert('double click')
  }
</script>
<template>
  <button v-doubleclick:500="handler">double click</button>
</template>
```
