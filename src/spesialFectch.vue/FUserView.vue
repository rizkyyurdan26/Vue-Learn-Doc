<template>
  <div v-if="users?.length === 0">Data Empty!!!</div>

  <div v-else-if="loading">Loading data...</div>

  <div v-else-if="error">
    {{ error }}
  </div>

  <div v-else>
    <ol>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
        - <button @click="handleDelete(user.id)">Delete</button>
      </li>
    </ol>

    <button @click="handleRemove">Remove All Data</button>
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { useFetch } from './composable/useFetch';
import { delUser, getUser } from './services/api';


const {data: users, loading, error, execute} = useFetch(getUser)

onMounted(execute)

async function handleDelete(id){
  if (confirm('Yakin ingin menghapus data?')){

    try{
      await delUser(id)

      users.value = users.value.filter(d => d.id !== id)

      console.log(users)
    } catch(err){
      alert(err.message)
    }
  }
}

async function handleRemove(){

  const confirmDelete = confirm("Yakin Menghapus Semua Data?")

  if(!confirmDelete) return

  try{

    for(const user of users.value){
      await delUser(user.id)
    }

    users.value = []

  }catch(err){
    alert(err.message)
  }

}


</script>
