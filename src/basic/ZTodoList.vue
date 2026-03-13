<script setup>
import { ref } from "vue";

const todo = ref("");
const todoList = ref([]);

function addTodo() {
  if (todo.value.trim() != "") {
    todoList.value.push({
        id: Date.now(),
        text: todo.value,
        done : false
    });

    todo.value = "";
  }
}

function deleteTodo(id) {
  const konfirmasi = confirm("Apakah anda yakin?");
  const index = todoList.value.findIndex(t => t.id === id)
  if (konfirmasi) {
    todoList.value.splice(index, 1);
  }
}

function clearTodo() {
  todoList.value = [];
}
</script>

<template>
  <h1>Todo App</h1>

  <div>
    <input type="text" placeholder="Input Todo" v-model="todo" />
    <button @click="addTodo">Tambah</button>
  </div>

  <div>
    <p v-if="todoList.length === 0">Belum Ada Data</p>

    <ul v-else>
      <li v-for="(data, id) in todoList" :key="data.id">
        <input type="checkbox" v-model="data.done" />

          {{ data.text }} <span v-if="data.done">- Selesai </span> <span v-else>- Belum Selesai </span>

        <button @click="deleteTodo(data.id)">Hapus</button>
      </li>
      <br />
      <button @click="clearTodo">Clear Todo</button>
    </ul>
  </div>
</template>
