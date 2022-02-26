# Introduce

### :tada:Directive collection for vue3

# How to use

```js
import { vCopy } from 'v3-directives'
createApp(App).directive('copy', vCopy).mount('#app')
```

# Then you can use like this

```html
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
