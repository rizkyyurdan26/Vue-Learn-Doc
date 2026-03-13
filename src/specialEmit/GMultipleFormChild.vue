<script setup>
import { ref } from 'vue';

const inputName = ref('')
const inputAge = ref('')

const emit = defineEmits(['addUser'])

function submitUser(user){
    if (!inputName.value || !inputAge.value){
        return alert('Isi Semua Data')
    } else {
        emit('addUser', {
            id: Date.now(),
            name : inputName.value,
            age : inputAge.value
        })
    }

    inputName.value = ''
    inputAge.value = ''
}
</script>

<template>
    <div>
        <input type="text" v-model="inputName" placeholder="Input Your Name"> <br>
        <input type="Number" v-model.number="inputAge" placeholder="Input Your Age"> <br>

        <button @click="submitUser">Submit</button>
    </div>
</template>


