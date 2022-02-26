# 介绍

### 拖动元素

# 示例

<script setup>
</script>

<div
  v-draggable
  :style="{
    width: '100px',
    height: '100px',
    background: 'green',
    transform: 'translateX(50px)'
  }"
>
  我能被拖动
</div>

# 代码

```html
<script setup lang="ts"></script>
<template>
  <div
    v-draggable
    :style="{
      width: '100px',
      height: '100px',
      background: 'green',
      transform: 'translateX(50px)'
    }"
  >
    I can drag
  </div>
</template>
```
