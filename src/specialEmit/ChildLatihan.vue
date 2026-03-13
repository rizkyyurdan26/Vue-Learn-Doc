<script setup>
defineProps({
    suka : Number
})

const emit = defineEmits(['likes', 'dislike', 'reset'])

</script>

<template>
    <p>Likes: {{ suka }}</p>
    <button @click="emit('likes')">Like ❤️</button>
    <button @click="emit('dislike')">Dislike 😒</button>
    <button @click="emit('reset')">Reset ⁉️</button>
</template>