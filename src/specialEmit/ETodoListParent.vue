<script setup>
import { ref } from 'vue';
import ETodoListChild from './ETodoListChild.vue';

const todo = ref([
  { id: 1, text: "Belajar Vue" },
  { id: 2, text: "Belajar Emit" },
  { id: 3, text: "Belajar Component" },
]);

function delTodo(id){
    todo.value = todo.value.filter(item => item.id != id)
}
</script>

<template>
    <div>
        <ol>
            <ETodoListChild 
            v-for="t in todo"
            :key="t.id"
            :todo="t.text"
            @delete="delTodo(t.id)"
            />
        </ol>
    </div>
</template>
