<template>
    <div>
        <ol>
            <li v-for="user in dataUser" :key="user.id">
                <router-link :to="`/users/${user.id}`">
                    {{ user.name }}
                </router-link>
            </li>
        </ol>
    </div>
</template>

<script setup>
import { dataUser } from './DataUser';
</script>
