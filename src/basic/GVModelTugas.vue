<script setup>
import { ref } from 'vue';

const nama = ref('')
const email = ref('')
const kota= ref('')

const inputNama = ref('')
const inputEmail = ref('')
const inputKota = ref('')

function btnSubmit(){
    inputNama.value = nama.value
    inputEmail.value = email.value
    inputKota.value = kota.value
}
</script>

<template>
    <div>
        <input type="text" placeholder="Fullname" v-model="nama">
        <br>
        <input type="text" placeholder="Email" v-model="email">
        <br>
        <input type="text" placeholder="City" v-model="kota">
    </div>

    <button @click="btnSubmit">Submit</button>

    <h2>Profile Preview</h2>
    <p>{{ inputNama }}</p>
    <p>{{ inputEmail }}</p>
    <p>{{ inputKota }}</p>
</template>