<script setup>
import { ref } from "vue";
import BChildStruktur from "./BChildStruktur.vue";

const dataCount = ref(0);

function addCount() {
  dataCount.value += 1;
}
</script>

<template>
  <BChildStruktur @increase="addCount" :count="dataCount" />
</template>
