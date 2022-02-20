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


<button v-copy="'value'">click me to copy</button>
```

# Author

[doom-9](https://github.com/doom-9)
