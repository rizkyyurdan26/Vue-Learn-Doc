<template>
  <div>
    <CrudEmit
      @create="receiveData"
      @remove="removeAllData"
      :editData="selectUser"
      @update="updateData"
    />

    <br>
    <h1>Data User</h1>
    <p v-if="!allData.length">Belum ada data!</p>
    <div v-else>
        <table border="1">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
              <CrudProps
                v-for="item in allData"
                :key="item.id"
                :data="item"
                @delete="delData(item.id)"
                @edit="editData"
              />
            </tbody>
        </table>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import CrudEmit from "./CrudEmit.vue";
import CrudProps from "./CrudProps.vue";

const allData = ref([]);
const selectUser = ref(null);

function receiveData(data) {
  allData.value.push(data);
}

function delData(id) {
  const idx = allData.value.find((t) => t.id === id);
  const conf = confirm(`Yakin ingin menghapus ${idx.username}?`);
  if (conf) {
    allData.value.splice(idx, 1);
  }
}

function removeAllData() {
  if (confirm("Ingin menghapus semua data User???")) {
    allData.value = [];
  }
}

function editData(id) {
  const user = allData.value.find((t) => t.id === id);
  selectUser.value = { ...user };
}

function updateData(data) {
  const index = allData.value.findIndex((i) => i.id === data.id);

  if (index !== -1) {
    allData.value[index] = data;
  }

  selectUser.value = null;
}
</script>
