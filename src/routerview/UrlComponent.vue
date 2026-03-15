<template>
    <div>
        <router-link to="/">Home</router-link> &nbsp;
        <router-link to="/about">About</router-link> &nbsp;

        <!-- Dengan Button -->
        <button @click="router.push('/contact')">Contact</button>
        
    </div>
</template>

<script setup>
import router from '../router';


</script>
