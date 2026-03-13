<script setup>
import { ref } from 'vue';
import GMultipleFormChild from './GMultipleFormChild.vue';

const users = ref([])

function addUser(user){   
    users.value.push(user)
}

function delUser(id){
    const item = users.value.find(t => t.id === id)
    const conf = confirm(`Yakin Ingin Hapus ${item.name}?`)

    if (conf){
        users.value = users.value.filter(d => d.id != id)
    }
}

</script>


<template>
    <div>
        <GMultipleFormChild @add-user="addUser"/>

        <ol>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.age }}

                <button @click="delUser(user.id)">Delete</button>
            </li>
        </ol>
    </div>
</template>

