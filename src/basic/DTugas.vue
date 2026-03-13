<script setup>
const product = {
    image : "https://picsum.photos/200",
    deskripsi : 'Laptop Gaming RTX',
    namaProduk : 'Laptop Asus',
    harga : 15000,
}

</script>

<template>
    <div>
        <img :src="product.image" alt="">
        <h2>{{ product.namaProduk }}</h2>
        <p>{{ product.deskripsi }}</p>
        <p>$ {{ product.harga }}</p>
        <button>Beli Sekarang</button>

    </div>
</template>