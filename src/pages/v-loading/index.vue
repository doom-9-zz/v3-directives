<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const changeLoading = () => {
  loading.value = !loading.value
}
</script>

<template>
  <h1>introduce</h1>
  <p>Display the loading effect on the specified element</p>
  <hr />
  <h1>example</h1>
  <div
    v-loading="loading"
    :style="{
      width: '100px',
      height: '100px',
      backgroundImage: `url('https://avatars.githubusercontent.com/u/65016011?v=4')`,
      backgroundSize: 'cover'
    }"
  ></div>
  <button @click="changeLoading">switch</button>
  <hr />
  <h1>code</h1>
  <pre>{{ `<script setup lang="ts">
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
</template>` }}</pre>
</template>
