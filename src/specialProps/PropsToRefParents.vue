<script setup>
import PropsToRefChild from './PropsToRefChild.vue';

</script>

<!-- Hanya Gunakan : / v-bind ketika looping atau untuk number (js Expression) -->

<template>
    <PropsToRefChild 
    nama="Laptop 1"
    :harga="100"
    :qty="12"
    />
</template>