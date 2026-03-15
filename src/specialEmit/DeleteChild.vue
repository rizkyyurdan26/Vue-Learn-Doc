<template>
  <tr>
    <td>{{ props.data.id }}</td>
    <td>{{ props.data.username }}</td>
    <td>{{ props.data.email }}</td>
    <td><button @click="remove">Delete</button></td>
  </tr>
</template>

<script setup>
const props = defineProps({
  data: Object,
});

const emit = defineEmits(["delete"]);

function remove() {
  emit("delete", props.data.id);
}
</script>
