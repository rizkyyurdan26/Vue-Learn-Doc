<template>
    <div v-if="loading">
        Loading data...
    </div>

    <div v-else-if="error">
        {{ error }}
    </div>

    <div v-else>
        <ol>
            <li v-for="user in users" :key="user.id">
                <p>{{ user.name }}</p>
                <p>Email: {{ user.email }}</p>
                <p>Office: {{ user.company.name }}</p>
            </li>
        </ol>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const users = ref([])
const loading = ref(false)
const error = ref(null)

async function getHandlingApi(){
    loading.value = true
    error.value = null

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!res.ok){
            throw new Error(`Api Error: ${res.status}`)
        }

        const data = await res.json()
        users.value = data

        console.log(data)
    } catch (err) {
        error.value = err.message
    } finally {
        loading.value = false
    }
}

onMounted(getHandlingApi)
</script>
