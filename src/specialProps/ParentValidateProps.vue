<script setup>
import ValidateProps from './ValidateProps.vue';


const products = [
    {id: 1, nama: 'Laptop', price: 1200, description: 'Ini Laptop Baru'},
    {id: 2, nama: 'Mouse', price: -1},
    {id: 3, nama: 'Keyboard', description: 'Keyboard berkualitas tinggi'}
]
</script>

<template>
    <div>
        <h1>Daftar Produtcs</h1>

        <ol>
                <ValidateProps 
                v-for="prod in products"
                :key="prod.id"
                :nama="prod.nama"
                :price="prod.price"
                :description="prod.description"
                />
        </ol>
    </div>
</template>