<template>
    <div v-if="loading">Loading data...</div>

  <div v-else-if="error">
    {{ error }}
  </div>

  <div v-else>
    <!-- <p>{{ user?.id }}</p> -->
    <p>{{ user?.name }} - {{ user?.username }}</p>
    <p>{{ user?.email }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useFetch } from './composable/useFetch';
import { getUserId } from './services/api';
import { onMounted } from 'vue';

const route = useRoute()

const {data: user, loading, error, execute} = useFetch(() => getUserId(route.params.id))

onMounted(execute)

</script>
