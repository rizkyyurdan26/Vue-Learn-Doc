<template>
    <div>
        <h1>Hapus Data</h1>

        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nama</td>
                    <td>Email</td>
                    <td>Aksi</td>
                </tr>
            </thead>

            <tbody>
                <DeleteChild
                v-for="data in allData" :key="data.id"
                :data="data"
                @delete="deleteData"
                />
                
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import DeleteChild from './DeleteChild.vue';

const allData = ref([
    {id: 1, username: 'User1', email: 'user1@gmail.com'},
    {id: 2, username: 'User2', email: 'user2@gmail.com'},
])

function deleteData(id){
    if (confirm('Yakin ingin menghapus data?')){
        allData.value = allData.value.filter(d => d.id !== id)
    }
}
</script>
