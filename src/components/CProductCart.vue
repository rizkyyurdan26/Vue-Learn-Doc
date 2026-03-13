<script setup>
defineProps({
    nama: String,
    harga: Number
})
</script>

<template>
    <div>
        <h3>{{ nama }} - <span> ${{ harga }}</span></h3>
    </div>
</template>