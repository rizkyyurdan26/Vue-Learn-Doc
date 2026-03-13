<template>
  <div>
    <h1>Form Input</h1>
    <form @submit.prevent="editData">
        <input type="text" placeholder="id" v-model="form.id" readonly> <br>
        <input type="text" placeholder="username" v-model="form.inputUsername" /> <br>
      
      <input
        type="email"
        placeholder="email"
        v-model="form.inputEmail"
        pattern=".+@.+\.com"
        required
      />
      &nbsp;
      <button type="submit">Save Edit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const form = ref({
  id: '',
  inputUsername: "",
  inputEmail: "",
});

const props = defineProps({
  user: Object,
});

const emit = defineEmits(["edit"]);

watch(
  () => props.user,
  (val) => {
    if (val) {
      form.value.id = val.id;
      form.value.inputUsername = val.username;
      form.value.inputEmail = val.email;
    }
  },
);

function editData() {
  const payload = {
    id: form.value.id,
    username: form.value.inputUsername,
    email: form.value.inputEmail,
  };

  emit("edit", payload);

  form.value = {
    id: '',
    inputUsername: "",
    inputEmail: "",
  };
}
</script>
