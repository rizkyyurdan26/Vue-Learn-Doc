<script setup>
import { ref } from 'vue';

const angka1 = ref()
const angka2 = ref()
const result = ref()

function countProcess(){
    return result.value = angka1.value + angka2.value
}
</script>

<template>
    <input type="number" placeholder="Angka 1" v-model.number="angka1">
    <br>
    <input type="number" placeholder="Angka 2" v-model.number="angka2">
    <br>
    <button @click="countProcess">Count</button>
    <p>{{ result }}</p>
</template>