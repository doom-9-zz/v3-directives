# 介绍

### :tada:适用于 vue3 的指令集合

# 怎样使用

```js
import { vCopy } from 'v3-directives'
createApp(App).directive('copy', vCopy).mount('#app')
```

# 然后你就可以这样使用

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
