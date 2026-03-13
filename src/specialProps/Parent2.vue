
<!-- Props Object -->
<script setup>
import Child2 from './Child2.vue';

const products = [
  { id: 1, nama: "Laptop", price: 12000000 },
  { id: 2, nama: "Mouse", price: 200000 },
  { id: 3, nama: "Keyboard", price: 500000 },
];
</script>

<template>
    <div>
        <ol>
            <Child2
            v-for="prod in products" :key="prod.id"
            :product="prod"
            />
        </ol>
    </div>
</template>
