<script setup>
    const products = [
        { id:1, nama:"Laptop", harga:10000 },
        { id:2, nama:"Mouse", harga:200 },
        { id:3, nama:"Keyboard", harga:500 }
    ]
</script>

<template>
    <h1>Available Products</h1>

    <div v-for="(prod, index) in products" :key="prod.id">
        <h3>{{index + 1}}. {{ prod.nama }} - ${{ prod.harga }}</h3>

    </div>
</template>