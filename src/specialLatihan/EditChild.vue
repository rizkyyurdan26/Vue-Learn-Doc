<template>
    <div>
        <form @submit.prevent="editRequest">
            <input type="text" placeholder="id" v-model="form.inputId" readonly>
            <input type="text" placeholder="Nama" v-model="form.inputNama">
            <input type="text" placeholder="Email" v-model="form.inputEmail">
            <button type="submit">Edit</button>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';


const form = ref({
    inputId: '',
    inputNama: '',
    inputEmail: ''
})
const props = defineProps({
    dataEdit: Object
})

const emit = defineEmits(['edit'])

watch(() => props.dataEdit, (val) => {
    if (val){
        form.value.inputId = val.id
        form.value.inputNama = val.nama 
        form.value.inputEmail = val.email
    }
})

function editRequest(){
    const payload = {
        id: form.value.inputId,
        nama: form.value.inputNama,
        email: form.value.inputEmail
    }

    emit('edit', payload)

    form.value = {
        inputId: '',
        inputNama: '',
        inputEmail: ''
    }
}
</script>
