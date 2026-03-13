<script setup>
    const fruits = ['Apple', 'Manggo', 'Orange']
</script>

<template>
    <div>
        <ul>
            <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>
