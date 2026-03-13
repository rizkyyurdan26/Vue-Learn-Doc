<!-- Basic Props -->
<script setup>
const props = defineProps({
    nama: String,
    harga: Number
})
</script>

<template>
    <div class="card">
        <li>
            <h3>{{ nama }}</h3>
            <p>${{ harga }}</p>
        </li>
    </div>
</template>