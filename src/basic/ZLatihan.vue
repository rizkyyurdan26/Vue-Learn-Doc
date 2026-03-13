<script setup>
import { ref } from 'vue';

    const todo = ref('')
    const todoList = ref([])

    function addTodo(){
        todoList.value.push({
            id : Date.now(),
            text : todo.value,
            done : false
        })

        todo.value = ''
    }

    function delTodo(id){
        const konfirmasi = confirm('Apakah Anda Yakin?')
        const index = todoList.value.findIndex(t => t.id === id)
        if (konfirmasi){
            todoList.value.splice(index, 1)
        }
    }

    function removeTodo(){
        const konf = confirm('Anda Yakin Ingin Menghapus Semua Data?')

        if (konf){
            todoList.value = []
        }
    }
</script>

<template>
  <div>
    <h1>Todo List</h1>
    <input type="text" placeholder="Input Your List" v-model="todo" />
    <button @click="addTodo">Save</button>
  </div>

  <div>
    <p v-if="todoList.length === 0">Belum Ada Data</p>
    <ol v-else>
        <li v-for="(data, index) in todoList" :key="data.id">
            <input type="checkbox" v-model="data.done">
            
            {{ data.text }} <span v-if="data.done">- Selesai</span> <span v-else>- Belum Selesai </span>

            <button @click="delTodo(data.id)">Delete</button>
        </li>

        <br>
        <button @click="removeTodo">Remove all data</button>
    </ol>
  </div>
</template>
