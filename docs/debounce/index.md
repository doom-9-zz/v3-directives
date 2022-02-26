# 介绍

### 防抖动

# 示例

<script setup>
const handle = () => {
  window.alert('I was executed')
}
</script>

<button v-debounce:click-1000="handle">快速点击我</button>

# 代码

```html
<script setup lang="ts">
  const handle = () => {
    window.alert('I was executed')
  }
</script>

<template>
  <button v-debounce:click-1000="handle">Quick click on me</button>
</template>
```
