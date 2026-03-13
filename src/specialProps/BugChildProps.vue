<script setup>
 const { nama } = defineProps({
  nama: String,
});

// watch(nama, () => {
//   console.log("berubah");
// });

</script>

<template>
  <p>{{ nama }}</p>
</template>
