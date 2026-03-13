<script setup>
import { computed, toRefs } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    validator(value) {
      return value >= 0;
    },
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    default: "General",
  },
  currency: {
    type: String,
    default: "$",
  },
});

const { name, price, stock, category, currency } = toRefs(props);

const status = computed(() => {
    if (stock.value > 5){
        return "Available"
    } else if (stock.value > 0) {
        return "Low Stock"
    } else {
        return "Out of Stock"
    }
})

</script>

<template>
  <li>
    <h3>{{ name }}</h3>
    <h5>{{ category }}</h5>
    <p>Price: {{ currency }}{{ price }}</p>
    <p>Stock: {{ stock }} - {{ status }}</p>
    <!-- <p>Status: {{ status }}</p> -->
  </li>
</template>
