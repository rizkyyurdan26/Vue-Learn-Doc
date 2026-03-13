<script setup> 
const emit = defineEmits(['increase'])

defineProps({
    count: Number
})

</script>

<template>
    <button @click="emit('increase')">Add</button>
    <p>Count: 
        {{ count }}</p>
</template>