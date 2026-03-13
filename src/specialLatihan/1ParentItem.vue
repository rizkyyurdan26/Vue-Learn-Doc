<script setup>
import { computed, ref } from 'vue';
import ProductItem from './1ProductItem.vue';

const fruits = ref([
    {id: 1, nama: 'Apple', price: 2, quantity: 10},
    {id: 2, nama: 'Orange', price: 3, quantity: 2},
    {id: 3, nama: 'Banana', price: 4, quantity: 0},
])

function addQty(id){
    const index = fruits.value.findIndex(item => item.id === id)
    fruits.value[index].quantity += 1
}

const totalItem = computed(() => 
    fruits.value.reduce((sum, item) => sum + item.quantity, 0)
)

</script>

<template>

    <div>
        <ul>
            <ProductItem 
            v-for="item in fruits"
            :key="item.id"
            :nama="item.nama"
            :price="item.price"
            :quantity="item.quantity"
            >
        
            <button @click="addQty(item.id)">Add Stock</button>
            </ProductItem>
            
        </ul>

        <h5>Total Item: {{ totalItem }}</h5>
    </div>

</template>