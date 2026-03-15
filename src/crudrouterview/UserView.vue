<template>
    <div>
        <h1>Data User</h1>

        <ol>
            <li v-for="user in data" :key="user.id">
                <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
            </li>
        </ol>

        <button @click="router.push('/user/add-user')">Add User</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { userData } from './UserData';
import { router } from '../crudrouter';

// ini nanti diganti api
const data = userData
</script>
