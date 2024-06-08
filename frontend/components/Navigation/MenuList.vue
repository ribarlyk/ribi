<template>
  <ul>
    <li>
      <NuxtLink class="list-item" to="/vydici">Въдици</NuxtLink>
    </li>
    <li>
      <NuxtLink class="list-item" to="/makari">Макари</NuxtLink>
    </li>
    <li>
      <NuxtLink class="list-item" to="/primamki">Примамки</NuxtLink>
    </li>
    <li>
      <NuxtLink class="list-item" to="/zahranki">Захранки</NuxtLink>
    </li>
    <li>
      <NuxtLink class="list-item" to="/aksesoari">Аксесоари</NuxtLink>
    </li>
    <li>
      <NuxtLink class="list-item" to="/camping">Къмпинг</NuxtLink>
    </li>
  </ul>
</template>
<script>
const onClick = () => {
  console.log("reeeeeeeeeeeeeeeeeeev");
};
</script>

<style scoped>
.list-item {
  position: relative;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.2em;
}

.list-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 100%;
  border-bottom: 2px solid transparent;
  transition: right 0.4s ease;
}

.list-item:hover::before {
  right: 0;
  border-bottom-color: var(--secondary-color);
}
</style>
