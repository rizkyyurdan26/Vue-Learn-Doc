<script setup>
import { ref } from "vue";
import FlexibleTodoChild from "./FlexibleTodoChild.vue";

const inputTodo = ref("");
const todoList = ref([]);

function addTodo() {
  if (inputTodo.value.trim() != "") {
    todoList.value.push({
      id: Date.now(),
      text: inputTodo.value,
      done: false,
    });
  } else {
    return alert("Harap Isi Todo");
  }

  inputTodo.value = "";
}

function delTodo(id) {
  const konfirmasi = confirm("Yakin Ingin Hapus?");
  if (konfirmasi) {
    todoList.value = todoList.value.filter((item) => item.id != id);
  }
}

function toggleCheck(id){
    const check = todoList.value.find(t => t.id === id)

    if (check){
        check.done = !check.done
    }
}
</script>

<template>
  <div>
    <h1>Todo List Emit</h1>

    <input type="text" placeholder="Input Todo" v-model="inputTodo" />

    <button @click="addTodo">Add Todo</button>
  </div>
  <div>
    <h1>Todo List</h1>
    <p v-if="!todoList.length">Belum Ada Todo</p>
    <ol v-else>
      <FlexibleTodoChild
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        @delete="delTodo"
        @toggle="toggleCheck"
      />
    </ol>
  </div>
</template>
