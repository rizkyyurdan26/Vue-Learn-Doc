<!-- Props Object -->

<script setup>
defineProps({
    product: Object
})
</script>

<template>
    <li>
        <h3>{{ product.nama }}</h3>
        <p>{{ product.price }}</p>
    </li>
</template>