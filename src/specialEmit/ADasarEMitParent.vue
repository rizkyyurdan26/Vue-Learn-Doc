<script setup>
import ADasarEmitSchild from './ADasarEmitSchild.vue';

function terimaEmit(){
    alert('Event di terima')
}
</script>

<template>
    <ADasarEmitSchild @message="terimaEmit"/>
</template>