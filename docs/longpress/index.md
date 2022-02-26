# 介绍

### 长时间按压触发回调

# 示例

<script setup>
const handle = () => {
  window.alert('long press')
}
</script>

<button v-longpress:1000="handle">长时间按压我</button>

# 代码

```html
<script setup lang="ts">
  const handle = () => {
    window.alert('long press')
  }
</script>

<template>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
</template>
```
