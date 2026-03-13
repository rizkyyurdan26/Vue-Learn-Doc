<template>
  <div>
    <form @submit.prevent="reqCreateData">
      <input
        type="text"
        placeholder="username"
        v-model="form.inputUsername"
      /><br />
      <input
        type="email"
        placeholder="email"
        v-model="form.inputEmail"
        pattern=".+@.+\.com"
        required
      /><br />
      <input
        type="password"
        placeholder="password"
        v-model="form.inputPassword"
      /><br />

      <br />
      <button type="submit">Save</button>
      &nbsp;
      <button @click="emit('remove')">Remove All</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const form = ref({
  inputUsername: "",
  inputEmail: "",
  inputPassword: "",
});

const props = defineProps({
  editData: Object,
  required:true,
  validator: (val) =>
    ["id", "username", "email", "password"].every((k) => k in val),
});

const emit = defineEmits(["create", "remove", "update"]);

watch(
  () => props.editData,
  (val) => {
    if (val) {
      form.value.inputUsername = val.username;
      form.value.inputEmail = val.email;
      form.value.inputPassword = val.password;
    }
  },
);

function reqCreateData() {
  if (
    !form.value.inputUsername.trim() ||
    !form.value.inputEmail.trim() ||
    !form.value.inputPassword.trim()
  ) {
    alert("Harap Isi Semua Data!!!");
    return;
  } else {
    if (confirm("Data sudah sesuai?")) {
      const payload = {
        id: props.editData?.id ?? Date.now(),
        username: form.value.inputUsername,
        email: form.value.inputEmail,
        password: form.value.inputPassword,
      };

      if (props.editData) {
        emit("update", payload);
      } else {
        emit("create", payload);
      }
    }
  }

  form.value = {
    inputUsername: "",
    inputEmail: "",
    inputPassword: "",
  };
}
</script>
