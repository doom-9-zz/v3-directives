# Introduce

### Keep clicking for a period of time and trigger the callback

# Example

<script setup>
const handle = () => {
  window.alert('long press')
}
</script>

<button v-longpress:1000="handle">Stay with me for a long time</button>

# Code

```html
<script setup lang="ts">
  const handle = () => {
    window.alert('long press')
  }
</script>

<template>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
</template>
```
