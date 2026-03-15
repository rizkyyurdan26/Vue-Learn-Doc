<template>
  <div>
    <h1>User Detail</h1>

    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>

    <br />
    <button @click="dinamicRouter.push('/users')">Back</button>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { dataUser } from "./DataUser";
import  dinamicRouter  from "../dinamicRouter/index";

const route = useRoute();
const user = dataUser.find((u) => u.id == route.params.id);
</script>
