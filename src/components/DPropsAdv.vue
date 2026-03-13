<script setup>
defineProps({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  kota: {
    type: String,
    default: "Tidak Diketahui",
  },
  status: {
    type: String,
    default: "Offline",
  },
  umur: {
    type: Number,
  },
});
</script>

<template>
  <div>
    <h3>{{ nama }}</h3>
    <p>{{ email }}</p>
    <p>{{ kota }}</p>
    <p>{{ status }}</p>
    <p>{{ umur ?? '-'}}</p>
  </div>
</template>
