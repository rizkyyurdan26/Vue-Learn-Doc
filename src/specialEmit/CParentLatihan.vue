<script setup>
import { ref } from 'vue';
import ChildLatihan from './ChildLatihan.vue';

const addLike = ref(0)

function addLikes(){
    addLike.value++
}

function disLike(){
    if (addLike.value > 0){
        addLike.value--
    } else {
        return
    }
}

function reset(){
    addLike.value = 0
}
</script>

<template>
    <ChildLatihan 
    @likes="addLikes" 
    @dislike="disLike"
    @reset="reset"
    :suka="addLike"/>
</template>