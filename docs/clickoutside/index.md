# 介绍

### 当点击元素外部时触发回调

# 示例

<script setup>
const handler = () => {
  window.alert('clicked outside')
}
</script>

<button v-clickoutside="handler">点击外部</button>

# 代码

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
