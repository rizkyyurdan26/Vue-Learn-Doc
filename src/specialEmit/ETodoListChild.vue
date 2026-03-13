<script setup>
const props = defineProps({
    id: {
        type: Number
    },
    todo: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['delete'])
</script>

<template>
    <li>
        {{ todo }}
        <button @click="emit('delete', id)">Delete</button>
    </li>

</template>