<script setup>

const user = {
    nama: 'Bejo',
    umur: 25,
    alamat: 'Pekanbaru'
}
</script>

<template>
    <h1>User Profile</h1>
    <p>Nama: {{ user.nama }}</p>
    <p>Umur: {{ user.umur }}</p>
    <p>Alamat: {{ user.alamat }}</p>
</template>