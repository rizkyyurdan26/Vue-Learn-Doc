<script setup>
 const products = [
    { id: 1, nama: "Laptop", harga: 10000 },
    { id: 2, nama: "Mouse", harga: 200 },
    { id: 3, nama: "Keyboard", harga: 500 }
]
</script>

<template>
    <div>
        <h1>List of Products</h1>
        <div v-for="product in products" :key="product.id">
            <h3>{{ product.nama }}</h3>
            <p>{{ product.harga }}</p>
        </div>
    </div>
</template>