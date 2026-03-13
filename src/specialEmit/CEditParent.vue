<template>
    <div>
        <CEditChild :user="userSelected" @edit="receiveEditUser"/>
        <hr>
        <h1>Data User</h1>

        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Aksi</td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="data in allData" :key="data.id">
                    <td>{{ data.id }}</td>
                    <td>{{ data.username }}</td>
                    <td>{{ data.email }}</td>
                    <td><button @click="userSelected = data">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import CEditChild from './CEditChild.vue';

const allData = ref([
    {id: 1, username: 'User1', email: 'user1@gmail.com'},
    {id: 2, username: 'User2', email: 'user2@gmail.com'},
])

const userSelected = ref(null)

function receiveEditUser(payload){
    const idx = allData.value.findIndex(d => d.id === payload.id)

    if(idx !== -1){
        allData.value[idx] = payload
    }

    userSelected.value = null;
}
</script>
