# 介绍

### 双击触发回调

# 示例

<script setup>

const handler = () => {
  window.alert('double click')
}
</script>

<button v-doubleclick:500="handler">双击</button>

# 代码

```js
<script setup lang="ts">

const handler = () => {
  window.alert('double click')
}
</script>
<template>
  <button v-doubleclick:500="handler">double click</button>
</template>
```
