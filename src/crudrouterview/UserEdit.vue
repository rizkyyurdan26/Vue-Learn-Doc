<template>
  <div>
    <h1>Edit User</h1>
    <hr />
    <form @submit.prevent="editData">
      <input
        type="text"
        placeholder="ID"
        v-model="form.inputID"
        readonly
      /><br />
      <input type="text" placeholder="Name" v-model="form.inputName" /><br />
      <input type="email" placeholder="Email" v-model="form.inputEmail" />
      <br /><br />
      <button type="submit">Save Change</button>
    </form>

    <button @click="router.back">Back</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { userData } from "./UserData";
import { useRoute } from "vue-router";
import { router } from "../crudrouter";

// ini nanti diganti api
const data = ref([...userData]);

const route = useRoute();

const user = data.value.find((u) => u.id == route.params.id);

const form = ref({
  inputID: user.id,
  inputName: user.name,
  inputEmail: user.email,
});

function editData() {
  if (confirm("Simpan Perubahan?")) {
    const target = data.value.find((t) => t.id == form.value.inputID);

    if (target) {
      target.name = form.value.inputName;
      target.email = form.value.inputEmail;
    }
  }

  console.log(data);
}
</script>
