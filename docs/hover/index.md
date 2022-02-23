# Introduce

### Trigger callback when hover element

# Example

<script setup>
const handler = () => {
  window.alert('hover')
}
</script>

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

# Code

```js
<script setup lang="ts">
const handler = () => {
  window.alert('hover')
}
</script>
<template>
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
</template>
```
