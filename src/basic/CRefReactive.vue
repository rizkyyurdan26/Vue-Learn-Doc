<!-- Ini adalah useState kalau di react -->

<script setup>
import { ref } from 'vue';


const count = ref(0)

function tambah(){
    count.value++
}

function kurang(){
    if (count.value > 0 ){
        count.value--
    }
}

function reset(){
    count.value=0
}
</script>

<template>
    <h1>Ref Count</h1>
    <p>{{ count }}</p>

    <button @click="tambah">Tambah</button>
    <button @click="kurang">kurang</button>
    <button @click="reset">reset</button>
</template>