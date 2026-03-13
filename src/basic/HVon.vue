<!-- 
 
 - onclick        → v-on / @click
 - getElementById → v-model
 - innerHTML      → {{ }} 
 
 -->

<script setup>
function sayHello(){
    alert('Hello Vue')
}

function greetnama(nama){
    alert('Hello' + ' ' + nama)
}
</script>

<template>
    <button v-on:click="sayHello">Click M1</button>

    <!-- Versi Simple -->
     <button @click="sayHello">Click M2</button>

    <!-- Versi Greet -->
     <br><br>
     <button @click="greetnama('Budi')">Click M3</button>
</template>

