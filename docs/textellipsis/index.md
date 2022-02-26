# 介绍

### 文本超出省略

# 示例

<script setup>
const text =
  'There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream;go where you want to go;be what you want to be,because you have only one life and one chance to do all the things you want to do.'
</script>

<div
  v-textellipsis:3
  :style="{
    width: '200px',
    height: '70px',
    border: '1px solid #ccc'
  }"
>
  {{ text }}
</div>

# 代码

```html
<script setup lang="ts">
  const text =
    'There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream;go where you want to go;be what you want to be,because you have only one life and one chance to do all the things you want to do.'
</script>
<template>
  <div
    v-textellipsis:3
    :style="{
      width: '200px',
      height: '55px',
      border: '1px solid #ccc'
    }"
  >
    {{ text }}
  </div>
</template>
```
