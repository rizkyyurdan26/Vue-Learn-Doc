<script setup>
const blog = defineProps({
    judul: String,
    deskripsi: String,
    author: String
})
</script>

<template>
    <div>
        <h1>{{ blog.judul }}</h1>
        <p>{{ blog.deskripsi }}</p>
        <p>Author: {{ blog.author }}</p>
    </div>
</template>