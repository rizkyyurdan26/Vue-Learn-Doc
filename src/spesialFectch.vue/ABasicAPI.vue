<!-- Tujuan: Mempelajari response dari api -->
<template>
  
    <ul>
      <li v-for="u in users" :key="u.id">
        {{ u }}
      </li>
    </ul>
 
</template>

<script setup>
import { onMounted, ref } from "vue";

const users = ref([]);

async function getApi() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  users.value = data;

  console.log(res);
}

onMounted(getApi);
</script>
