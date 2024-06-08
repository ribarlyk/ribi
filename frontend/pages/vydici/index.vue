<template>
  <p v-if="data">Въдици</p>
</template>

<script setup>
const data = ref(null);

//Това работи но е CSR , за SSR да се направи стор и от там да се дърпа дейтата
// onMounted(async () => {
//   data.value = await $fetch("/api/products");
// });
</script>
