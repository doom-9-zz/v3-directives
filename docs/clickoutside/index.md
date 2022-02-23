# Introduce

### Callback executed when an area outside the element is clicked

# Example

<script setup>
const handler = () => {
  window.alert('clicked outside')
}
</script>

<button v-clickoutside="handler">click</button>

# Code

```js
<script setup lang="ts">
const handler = () => {
  window.alert('clicked outside')
}
</script>
<template>
  <button v-clickoutside="handler">click</button>
</template>
```
