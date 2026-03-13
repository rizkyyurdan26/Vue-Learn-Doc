<script setup>
import { computed, toRefs } from 'vue';

    const item = defineProps({
        nama:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            default: 0,
            validator(value){
               return value >=0
            }
        },
        quantity: {
            type: Number
        },
        qurency:{
            type: String,
            default: '$'
        }
    })

const {nama, price, quantity, qurency} = toRefs(item)

const status = computed(() => {
    if (quantity.value > 5){
        return 'Available'
    } else if (quantity.value > 0) {
        return 'Low Stock'
    } else {
        return 'Out of Stock'
    }
})
</script>

<template>
    <li>
        <h2>{{ nama }}</h2>
        <p>Price: {{ qurency }}{{ price }}</p>
        <p>{{ quantity }} - {{ status }}</p>

        <slot></slot>
    </li>
</template>