<template>
  <div>
    <h2 v-if="!success">Deleting user...</h2>

    <p v-if="success">
      ✅ User Berhasil Dihapus!
      <br /><br />
      Redirecting ke halaman User...
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { userData } from "./UserData";
import { router } from "../crudrouter";

const route = useRoute();
const success = ref(false);

onMounted(() => {
  setTimeout(() => {
    const index = userData.findIndex((d) => d.id == route.params.id);

    if (index !== -1) {
      userData.splice(index, 1);
    }

    success.value = true;
    console.log(userData);

    setTimeout(() => {
      router.push("/user");
    }, 2000);
    
  }, 2000);
});
</script>
