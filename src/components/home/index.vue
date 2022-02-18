<script lang="ts" setup>
import Nav from '../nav/index.vue'
</script>

<template>
  <main>
    <header></header>
    <div>
      <nav>
        <Nav />
      </nav>
      <article>
        <router-view></router-view>
      </article>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  overflow: auto;
}

header {
  height: 60px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

div {
  display: flex;
  height: calc(100vh - 60px);
}

nav {
  width: 200px;
  border-right: 1px solid #ccc;
  overflow: auto;
  box-sizing: border-box;
}

article {
  flex: 1;
  overflow: auto;
  padding: 10px;
}
</style>
