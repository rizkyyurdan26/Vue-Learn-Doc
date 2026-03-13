<!-- Basic Props -->
<script setup>
import Child1 from "./child1.vue";

const products = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Mouse", harga: 200000 },
  { id: 3, nama: "Keyboard", harga: 500000 },
];
</script>

<template>
  <h1>Daftar Produk</h1>
  <ol>
    <Child1
      v-for="prod in products"
      :key="prod.id"
      :nama="prod.nama"
      :harga="prod.harga"
    />
  </ol>
</template>
