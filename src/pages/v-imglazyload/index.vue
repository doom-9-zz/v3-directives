<script setup lang="ts">
const list = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  img: 'https://avatars.githubusercontent.com/u/65016011?v=4'
}))
</script>
<template>
  <h1>introduce</h1>
  <p>Lazy load picture</p>
  <hr />
  <h1>code</h1>
  <pre>{{ `
<script setup lang="ts">
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
  </template>` }}</pre>
  <hr />

  <h1>example</h1>
  <img
    v-for="item in list"
    :key="item.id"
    v-imglazyload="item.img"
    alt=""
    :style="{ width: '100px', height: '100px', display: 'block' }"
  />
</template>
