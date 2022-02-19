<script lang="ts" setup>
import { readmeDemo, copyDemo } from '../../const/const'
</script>

<template>
  <h1>Introduce</h1>
  <p>Directive collection for vue3</p>
  <p>适用于 Vue3 的指令集合。</p>
  <a href="https://github.com/doom-9/v3-directives">Github</a>
  <hr />
  <h1>How to use</h1>
  <highlightjs language="js" :code="readmeDemo" />
  <p>Then you can use like this</p>
  <highlightjs language="js" :code="copyDemo" />
  <hr />
</template>
