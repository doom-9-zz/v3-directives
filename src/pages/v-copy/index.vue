<script setup lang="ts">
import { ref } from "vue";

const value = ref("222");
</script>

<template>
  <div v-copy="value">111</div>
  <button
    @click="
      () => {
        value = '333';
      }
    "
  ></button>
</template>

<style></style>
