<template>
  <div>
    <h1>Data Edit</h1>
    <EditChild :dataEdit="selectedData" @edit="addEdit"/>
    <hr>
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
        <tr v-for="data in dataList" :key="data.id">
            <td>{{ data.id }}</td>
            <td>{{ data.nama }}</td>
            <td>{{ data.email }}</td>
            <td><button @click="selectedData = data">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import EditChild from './EditChild.vue';

const dataList = ref([
  { id: 1, nama: "Bejo", email: "bejo@gmail.com" },
  { id: 2, nama: "Udin", email: "udin@gmail.com" },
]);

const selectedData = ref(null)


function addEdit(payload){
    const idx = dataList.value.findIndex(d => d.id === payload.id)

    if (idx !== -1){
        dataList.value[idx] = payload
    }

    // selectedData.value = null
}

</script>
