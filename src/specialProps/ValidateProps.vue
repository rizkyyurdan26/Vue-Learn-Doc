<script setup>
defineProps({
  nama: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    default: 0,
    validator(value){
        return value >= 0
    } // Untuk wanring Developer via console
  },

  description: {
    type: String,
    default: '-'
  },
});
</script>

<template>
  <li>
    <h3>{{ nama }}</h3>
    <p>Harga: ${{ price }}</p>
    <p>{{ description}}</p>
  </li>
</template>
