# 介绍

### 只触发一次回调

# 示例

<script setup>
const handler = () => {
  window.alert('Hello!')
}
</script>

<button v-ononce:click="handler">只会 alert 一次</button>

# 代码

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
