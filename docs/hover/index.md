# 介绍

### 划过元素触发回调

# 示例

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
  划过
</div>

# 代码

```html
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
