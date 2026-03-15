<template>
  <div v-if="loading">Loading data...</div>

  <div v-else-if="error">
    {{ error }}
  </div>

  <div v-else>
    <ol>
      <li v-for="user in users" :key="user.id">
        <p>{{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Office: {{ user.company.name }}</p>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getUser } from "./services/api";

const users = ref([]);
const loading = ref(false);
const error = ref(null);

async function getDataApi() {
  loading.value = true;
  error.value = null;

  try {
    users.value = await getUser();

    console.log(users);
  } catch (err) {
    throw new Error(`Error: ${res.status}`);
  } finally {
    loading.value = false;
  }
}

onMounted(getDataApi);
</script>
