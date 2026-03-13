<script setup>
    const title = 'Sepatu Nike'
    const harga = 1500
    const image = "https://picsum.photos/200"
</script>

<template>
    <div>
        <img :src="image" alt="">
        <h2>{{ title }}</h2>
        <p>Rp. {{ harga }}</p>
    </div>
</template>