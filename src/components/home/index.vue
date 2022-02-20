<script lang="ts" setup>
import Nav from '../nav/index.vue'
import { ref } from 'vue'

const navOpen = ref(false)
</script>

<template>
  <main>
    <header></header>
    <div>
      <nav :class="[navOpen ? 'nav-open' : '']">
        <Nav @click="navOpen = false" />
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        class="menu"
        @click="navOpen = !navOpen"
      >
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          fill="currentColor"
        ></path>
      </svg>
      <article>
        <router-view></router-view>
      </article>
    </div>
  </main>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  main {
    height: 100vh;
    width: 100vw;
    overflow: auto;
  }

  header {
    height: 0px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }

  div {
    display: flex;
    height: calc(100vh - 0px);
  }

  .menu {
    display: none;
  }

  nav {
    width: 200px;
    border-right: 1px solid #ccc;
    overflow: auto;
    box-sizing: border-box;
    height: 100%;
  }

  article {
    flex: 1;
    overflow: auto;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 768px) {
  main {
    width: 100vw;
  }

  header {
    height: 0px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }

  .menu {
    display: block;
    cursor: pointer;
    position: absolute;
    width: 50px;
    height: 50px;
    right: 20px;
    top: 20px;
  }

  nav {
    width: 200px;
    border-right: 1px solid #ccc;
    overflow: auto;
    box-sizing: border-box;
    position: fixed;
    background-color: #fff;
    transform: translateX(-200px);
    transition: transform 0.3s ease-in-out;
  }

  .nav-open {
    transform: translateX(0px);
  }

  article {
    padding: 10px;
  }
}
</style>
