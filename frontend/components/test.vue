<template>
  <div v-for="product in data.products">
    <div>{{ product.title }}</div>
    <div>{{ product.description }}</div>
    <div>{{ product.price }}</div>
    <div>{{ product.quantity }}</div>
    <NuxtImg :src="product.images[0] ?? 'mrysen tekst'" />
  </div>
</template>

<script setup>
let { data } = await useFetch("/api/products");
</script>
