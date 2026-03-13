<script setup>
import { ref } from 'vue';
import DPayloadChild from './DPayloadChild.vue';

const products = ref([
    {id: 1, nama: 'Nama1'},
    {id: 2, nama: 'Nama2'},
    {id: 3, nama: 'Nama3'},
])

function deleteProduct(id){
    const konfirmasi = confirm('Yakin Ingin menghapus?')
    
    if (konfirmasi){
        products.value = products.value.filter(item => item.id != id)
    }
}
</script>

<template>
    <div>
        <ol>
            <DPayloadChild 
            v-for="prod in products"
            :key="prod.id"
            @delete="deleteProduct(prod.id)"
            :nama="prod.nama"
            />
        </ol>
    </div>
</template>
