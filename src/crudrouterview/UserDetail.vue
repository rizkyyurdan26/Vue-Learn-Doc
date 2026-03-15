<template>
  <div>
    <h1>Detail User</h1>
    <hr />
    <table border="1">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Aksi</td>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td> <router-link :to="`/user/${user.id}/edit`">Edit</router-link> &nbsp; <button @click="deleteUser(user.id)">Delete</button> </td>
            </tr>
        </tbody>
    </table>
    <button @click="router.back()">Back</button>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { userData } from "./UserData";
import { ref } from "vue";
import {router} from "../crudrouter/index"

const route = useRoute();

// ini nanti diganti api
const data = ref([...userData]);

const user = data.value.find((u) => u.id == route.params.id);

function deleteUser(id){
    if (confirm('Yakin ingin menghapus?')){
        data.value = data.value.filter(d => d.id !== id)
        router.push(`/user/${user.id}/delete`)
    }

    console.log(data)

}
</script>
