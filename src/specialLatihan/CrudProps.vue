<template>
    <tr>
        <td>{{ data.username }}</td>
        <td>{{ data.email }}</td>
        <td>{{ showPassword ? data.password : '*******'}} 
            <button @click="showPassword = !showPassword">{{ showPassword ? '🫣' : '👀' }}</button>
        </td>
        <td>
            <button @click="emit('edit', data.id)">Edit</button>
            <button @click="emit('delete')">Delete</button>
        </td>
    </tr>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    data: Object,
    validator: (val) => ['id', 'username', 'email', 'password'].every(item => item in val)
})

const emit = defineEmits(['edit', 'delete'])

const showPassword = ref(false)
</script>
