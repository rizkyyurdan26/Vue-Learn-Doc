<template>
    <h1 v-if="!allData.length">Belum ada Data..</h1>
    <div v-else>
        <ol>
            <ERemoveChild 
            v-for="data in allData" :key="data.id"
            :data="data"
            />
        </ol>

        <button @click="removeAll">Remove All Data</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ERemoveChild from './ERemoveChild.vue';

const allData = ref([
    {id: 1, username: 'User1', email: 'user1@gmail.com'},
    {id: 2, username: 'User2', email: 'user2@gmail.com'},
])

function removeAll(){
    if (confirm('Yakin menghapus semua data?')){
        allData.value = []

    }
}

</script>
