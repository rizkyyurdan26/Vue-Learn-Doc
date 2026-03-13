<template>
    <BCreateChild @create="receiveData"/>
    <br>
    <h1>Data User</h1>
    <table border="1">
        <thead>
            <tr>
                <td>Username</td>
                <td>Password</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in alldata" :key="data.id">
                <td>{{ data.username }}</td>
                <td>{{ data.email }}</td>
                
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue';
import BCreateChild from './BCreateChild.vue';

const alldata = ref([])

function receiveData(data){
    alldata.value.push(data)
}

</script>
