# v3-directives

Directive collection for [Vue3](https://github.com/vuejs/core).

适用于 [Vue3](https://github.com/vuejs/core) 的 指令集合。

# Document

[Document](https://v3-directives.vercel.app/)

# Install

#### NPM

```bash
npm install v3-directives --save
```

# Usage

```js
import { vCopy } from 'v3-directives'
createApp(App).directive('copy', vCopy).mount('#app')
```

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

# List

- [x] v-clickoutside.
- [x] v-copy.
- [x] v-debounce.
- [x] v-doubleclick.
- [x] v-draggable.
- [x] v-flicker.
- [x] v-hover.
- [x] v-focus.
- [x] v-imglazyload.
- [x] v-loading.
- [x] v-longpress.
- [x] v-money.
- [x] v-ononce.
- [x] v-textellipsis.

## 运行项目

安装依赖

```shell
npm install
```

启动本地调试

```shell
npm run docs:dev
```

编译打包，生成编译后的目录：es,lib

```shell
npm run build-tsc-esm-lib
```

# Author

[doom-9](https://github.com/doom-9)
