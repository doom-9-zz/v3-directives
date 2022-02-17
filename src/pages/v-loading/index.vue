<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)

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
      backgroundImage: `url('https://avatars.githubusercontent.com/u/65016011?v=4')`,
      backgroundSize: 'cover'
    }"
  ></div>
  <button @click="changeLoading">点击</button>
</template>
