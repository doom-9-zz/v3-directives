<script setup lang="ts">
import routeMap from '../../router/const'
</script>

<template>
  <ul>
    <li
      v-for="item in routeMap"
      :key="item.path"
      :class="[$route.path === item.path && 'activity']"
      @click="$router.push(item.path)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  list-style: none;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid #ccc;
}
li:hover {
  background: #eee;
}
.activity {
  background: #eee;
}
</style>
