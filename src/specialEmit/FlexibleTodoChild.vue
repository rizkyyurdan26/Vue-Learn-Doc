<script setup>
const props = defineProps({
  todo: Object,
});

const emit = defineEmits(["delete", "toggle"]);
</script>

<template>
  <li>
    <input
      type="checkbox"
      :checked="todo.done"
      @change="emit('toggle', todo.id)"
    />

    {{ todo.text }} <span v-if="todo.done"> - Selesai </span>
    <span v-else> - Belum Selesai </span>

    <button @click="emit('delete', todo.id)">Delete</button>
  </li>
</template>
