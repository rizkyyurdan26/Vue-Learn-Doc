<script setup>
import { ref } from 'vue';
import ZTugasChild from './ZTugasChild.vue';

const products = ref([
  { id: 1, name: "Laptop", price: 1200, stock: 12, category: "Electronics" },
  { id: 2, name: "Mouse", price: 25, stock: 3 },
  { id: 3, name: "Keyboard", stock: 0, currency: 'Rp. ' },
]);

function increasePrice(){
    products.value[0].price += 100
}
</script>

<template>
    <div>
        <ol>
            <ZTugasChild
            v-for="prod in products"
            :key="prod.id"
            :name="prod.name"
            :price="prod.price"
            :stock="prod.stock"
            :category="prod.category"
            :currency="prod.currency"
            />
        </ol>

        <button @click="increasePrice">Increase Price</button>
    </div>
</template>
