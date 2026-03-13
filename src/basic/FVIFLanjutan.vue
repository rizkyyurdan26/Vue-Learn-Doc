<script setup>
const products = [
    { id:1, nama:"Laptop", harga:10000, stock:6 },
    { id:2, nama:"Mouse", harga:200, stock:0 },
    { id:3, nama:"Webcam", harga:2000, stock:3 }
]
</script>

<template>
    <div v-for="prod in products" :key="prod.id">
        <h3>{{ prod.nama }} - {{ prod.stock }}</h3>

        <p v-if = "prod.stock > 5">Stock Tersedia  </p>
        <p v-else-if="prod.stock > 0">Stock Hampir Habis</p>
        <p v-else>Stock Habis</p>
    </div>
</template>