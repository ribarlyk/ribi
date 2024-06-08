<template>
  <nav class="flex justify-between items-center p-4">
    <button
      @click="toggleMenu"
      class="block md:hidden focus:outline-none mr-14"
    >
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <div
      v-show="isMenuOpen"
      @click.self="toggleMenu"
      class="fixed inset-0 z-40 md:hidden"
    ></div>

    <div
      :class="[
        'fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 focus:outline-none"
      >
        <Icon name="clarity:close-line" class="w-6 h-6" />
      </button>

      <NavigationMenuList
        class="flex flex-col gap-4 p-4 mt-12"
        @click="closeMenu"
      />

    </div>

    <!-- Desktop Navigation Menu -->
    <NavigationMenuList class="hidden md:flex md:flex-row gap-4 bg" />

    <NavigationSearchBar class="mr-14" />
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);
</script>

<style scoped>
nav{
  border-bottom: solid 2px var(--secondary-color);
}
.fixed {
  position: fixed;
}
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bg-black {
  background-color: rgba(0, 0, 0, 1);
}
.bg-opacity-50 {
  opacity: 0.5;
}
.top-0 {
  top: 0;
}
.left-0 {
  left: 0;
}
.h-full {
  height: 100%;
}
.w-64 {
  width: 16rem;
}
.bg-white {
  background-color: white;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.transform {
  transform: translateX(0);
}
.transition-transform {
  transition-property: transform;
}
.duration-300 {
  transition-duration: 300ms;
}
.translate-x-0 {
  transform: translateX(0);
}
.-translate-x-full {
  transform: translateX(-100%);
}
.absolute {
  position: absolute;
}
.top-4 {
  top: 1rem;
}
.right-4 {
  right: 1rem;
}
.menu-icon {
  margin: 20px auto;
  width: 20px;
  height: 14px;
  cursor: pointer;
  position: relative;
}

.menu-icon span {
  background-color: black;
  height: 2px;
  position: absolute;
  width: 100%;
  left: 0;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.menu-icon span:first-child {
  top: 0;
}

.menu-icon span:nth-child(2) {
  top: 6px;
}

.menu-icon span:last-child {
  top: 12px;
}

.menu-icon:hover span:nth-child(2) {
  opacity: 0;
}

.menu-icon:hover span:first-child,
.menu-icon:hover span:last-child {
  top: 6px;
  background-color: red;
}

.menu-icon:hover span:first-child {
  transform: rotate(45deg);
}

.menu-icon:hover span:last-child {
  transform: rotate(-45deg);
}
</style>
