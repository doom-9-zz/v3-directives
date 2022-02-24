# 介绍

### 在元素上添加 loading 效果

# 示例

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const changeLoading = () => {
  loading.value = !loading.value
}

const style = {
  width: '100px',
  height: '100px',
  backgroundImage: `url("https://avatars.githubusercontent.com/u/65016011?v=4")`,
  backgroundSize: 'cover'
}

</script>

<div
  v-loading="loading"
  :style="style"
></div>
<button @click="changeLoading">切换</button>

# 代码

```js
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const changeLoading = () => {
  loading.value = !loading.value
}
</script>

<template>
  <div
    v-loading="loading"
    :style="{
      width: '100px',
      height: '100px',
      backgroundImage: 'url('https://avatars.githubusercontent.com/u/65016011?v=4')',
      backgroundSize: 'cover'
    }"
  ></div>
  <button @click="changeLoading">switch</button>
</template>
```
