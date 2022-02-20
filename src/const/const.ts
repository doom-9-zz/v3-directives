export const copyDemo = `<script setup lang="ts">
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
</template>`

export const debounceDemo = `<script setup lang="ts">
const handle = () => {
  window.alert('I was executed')
}
</script>

<template>
  <button v-debounce:click-1000="handle">Quick click on me</button>
</template>`

export const focusDemo = `<template>
<input v-focus />
</template>`

export const lazyLoadDemo = `<script setup lang="ts">
const list = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  img: 'https://avatars.githubusercontent.com/u/65016011?v=4'
}))
</script>
<template>
  <img
    v-for="item in list"
    :key="item.id"
    v-imglazyload="item.img"
    :style="{ width: '100px', height: '100px', display: 'block' }"
  />
  </template>`

export const loadingDemo = `<script setup lang="ts">
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
</template>`

export const longPressDemo = `<script setup lang="ts">
const handle = () => {
  window.alert('long press')
}
</script>

<template>
  <button v-longpress:1000="handle">Stay with me for a long time</button>
</template>`

export const onOnceDemo = `<script setup lang="ts">
const handler = () => {
  window.alert('Hello!')
}
</script>
<template>
  <button v-ononce:click="handler">only alert once</button>
</template>`

export const readmeDemo = `
import { vCopy } from 'v3-directives'
createApp(App).directive('copy', vCopy).mount('#app')
`

export const clickOutSideDemo = `
<script setup lang="ts">
const handler = () => {
  window.alert('clicked outside')
}
</script>
<template>
  <button v-clickoutside="handler">click</button>
</template>
`

export const hoverDemo = `<script setup lang="ts">
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
</template>`
