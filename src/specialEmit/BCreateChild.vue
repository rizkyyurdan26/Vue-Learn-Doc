<template>
    <div>
        <form @submit.prevent="createData">
            <input type="text" placeholder="Username" v-model="form.inputUsername"> <br><br>
            <input type="email" placeholder="Email" v-model="form.inputEmail" pattern=".+@.+\.com" required>
            <br><br>
            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['create'])
const form = ref({
    inputUsername : '',
    inputEmail : ''
})

function createData(){
    emit('create', {
        id: crypto.randomUUID(),
        username: form.value.inputUsername,
        email: form.value.inputEmail
    })
}
</script>
