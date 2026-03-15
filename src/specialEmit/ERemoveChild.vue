<template>

        <li>
            <p>{{ props.data.id }}</p>
            <p>{{ props.data.username }}</p>
            <p>{{ props.data.email }}</p>
            
        </li>
   
</template>

<script setup>
const props = defineProps({
    data: Object
})
</script>
