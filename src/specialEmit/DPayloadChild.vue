<script setup>

const props = defineProps({
    id: Number,
    nama: String
})

const emit = defineEmits(['delete'])
</script>

<template>
    <li>
        <h2>{{ nama }}</h2>
    <button @click="emit('delete', id)">Delete</button>
    </li>
</template>