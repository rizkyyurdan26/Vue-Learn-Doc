<script setup>
import { computed, toRefs } from 'vue';

const props= defineProps({
    nama: String,
    harga: Number,
    qty: Number
}) 

const {nama, harga, qty} = toRefs(props)

const total = computed(() => harga.value * qty.value)
</script>

<template>
    <div>
        <h3>{{ nama }}</h3>
        <p>{{ harga }}</p>
        <p>{{ qty }}</p>
        <p>Total: {{ total }}</p>

    </div>
</template>