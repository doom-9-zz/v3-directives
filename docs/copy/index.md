# 介绍

### 复制传入的值

# 示例

<script setup >
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<p>将要复制的值:{{ value }}</p>
<button v-copy="value">点击我复制</button>
<button
  @click="
    () => {
      value = 'Changed'
    }
  "
>
  改变将要复制的值
</button>
<input type="text" placeholder="paste here" />

# 代码

```js
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('You are about to copy these values')
</script>

<template>
  <button v-copy="value">click me to copy</button>
  <button
    @click="
      () => {
        value = 'Changed'
      }
    "
  >
    change the value to be copied
  </button>
</template>
```
