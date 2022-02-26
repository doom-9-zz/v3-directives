# Introduce

### Lazy load picture

# Code

```html
<script setup lang="ts">
  const list = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    img: 'https://avatars.githubusercontent.com/u/65016011?v=4'
  }))
</script>
<template>
  <img
    v-for="item in list"
    :key="item.id"
    v-imglazyload="item.img"
    :style="{ width: '100px', height: '100px', display: 'block' }"
  />
</template>
```

# Example

<script setup>
const list = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  img: 'https://avatars.githubusercontent.com/u/65016011?v=4'
}))
</script>

<img
  v-for="item in list"
  :key="item.id"
  v-imglazyload="item.img"
  :style="{ width: '100px', height: '100px', display: 'block' }"
/>
