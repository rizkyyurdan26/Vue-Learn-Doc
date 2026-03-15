<template>
    <div>
        <h1>Add New Data</h1>
        <form @submit.prevent="addUser">
            <label>ID: </label>
            <input type="text" placeholder="id" v-model="form.inputId" readonly><br>
            <label>Name: </label>
            <input type="text" placeholder="name" v-model="form.inputName" required><br>
            <label>Email: </label>
            <input type="email" placeholder="Email" v-model="form.inputEmail"  required><br>

            <button type="submit">Add User</button>
        </form>
        <button @click="router.back">Back</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { userData } from './UserData';
import { router } from '../crudrouter';

const data = ref([...userData])


const form = ref({
    inputId: crypto.randomUUID(),
    inputName: '',
    inputEmail: ''

})

function addUser(){
    data.value.push({
        id: form.value.inputId,
        name: form.value.inputName,
        email: form.value.inputEmail
    })

    form.value = ({
        inputId: crypto.randomUUID(),
        inputName: '',
        inputEmail: ''
    })

    console.log(data)
}
</script>
