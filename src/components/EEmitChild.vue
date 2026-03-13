<script setup>
    const emit = defineEmits(['hapus'])

    const props = defineProps({
        nama: String
    })

    function deleteItem(){
        emit('hapus')
    }
</script>

<template>
    <li>
        {{ nama }}

        <button @click="deleteItem">Delete</button>
    </li>
</template>