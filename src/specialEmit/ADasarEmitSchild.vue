<script setup>
const emit = defineEmits(['message'])

function KirimMessage(){
    emit('message')
}
</script>

<template>

    <button @click="KirimMessage">Show Msg</button>

</template>