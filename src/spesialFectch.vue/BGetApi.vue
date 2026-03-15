<template>
    <div>
        <ol>
            <li v-for="user in users" :key="user.id">
                <p>{{ user.name }}</p> 
                <p>Email: {{ user.email }}</p> 
                <p>Phone: {{ user.phone }}</p> 
            </li>
        </ol>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const users = ref([])

async function getApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    users.value = data
}

onMounted(getApi)
</script>
