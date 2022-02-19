<script setup lang="ts">
import { clickOutSideDemo } from '../../const/const'

const handler = () => {
  window.alert('clicked outside')
}
</script>
<template>
  <h1>Introduce</h1>
  <p>Callback executed when an area outside the element is clicked</p>
  <hr />
  <h1>Example</h1>
  <button v-clickoutside="handler">click</button>
  <hr />
  <h1>Code</h1>
  <highlightjs language="js" :code="clickOutSideDemo" />
</template>
