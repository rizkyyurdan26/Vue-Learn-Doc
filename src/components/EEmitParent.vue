<script setup>
import { ref } from "vue";
import EEmitChild from "./EEmitChild.vue";

const products = ref([
  { id: 1, nama: "Laptop" },
  { id: 2, nama: "Mouse" },
  { id: 3, nama: "Keyboard" },
]);

function hapusProduct(index){
    products.value.splice(index, 1)
}
</script>

<template>
    <ul>
        <EEmitChild
        v-for="data in products" :key="data.id"
        :nama="data.nama"
        @hapus="hapusProduct"
        />
    </ul>
</template>