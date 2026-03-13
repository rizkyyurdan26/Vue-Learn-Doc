<!-- Two Way Binding -->
<script setup>
import { ref } from 'vue';

 const name = ref("")
</script>

<template>
    <input type="text" v-model="name">
    <p>Nama: {{ name }}</p>
</template>