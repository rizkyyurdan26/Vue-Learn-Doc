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
import { onMounted } from "vue";
import { useFetch } from "./composable/useFetch";
import { getUser } from "./services/api";

const { data: users, loading, error, execute } = useFetch(getUser);

onMounted(execute);
</script>
