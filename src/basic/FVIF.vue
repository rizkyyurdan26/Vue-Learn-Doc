<script setup>
import { ref } from 'vue';

    const isLogin = ref(false)
    const nama = 'User'
</script>

<template>
    <p v-if="isLogin">Selamat Datang {{ nama }}</p>
    <p v-else>Silahkan Login</p>
</template>