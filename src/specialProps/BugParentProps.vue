<script setup>
import { ref } from 'vue';
import BugChildProps from './BugChildProps.vue';

const nama = ref('Laptop')

function gantiNama(){
    nama.value = 'Laptop Gaming'
}

</script>

<template>
    <button @click="gantiNama">Ganti Nama</button>
    <BugChildProps 
    :nama="nama"
    />
</template>