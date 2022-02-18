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
  height: 80px;
  border-bottom: 1px solid #ccc;
}

div {
  display: flex;
  height: calc(100vh - 80px);
}

nav {
  width: 200px;
  border-right: 1px solid #ccc;
}

article {
  flex: 1;
  overflow: auto;
}
</style>
