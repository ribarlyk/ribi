<template>
  <div class="input-container" :class="{ focused: containerIsFocused }">
    <input
      v-model="searchTerm"
      type="text"
      class="input-field"
      placeholder="Търсене на продукти..."
      @focus="containerIsFocused = true"
      @blur="containerIsFocused = false"
    />
    <button class="icon-container" @click="debounce">
      <Icon name="tabler:search" color="var(--secondary-color)" />
    </button>
  </div>
</template>

<script setup lang="ts">
const containerIsFocused = ref(false);
const searchTerm = ref("");

const onSearch = () => {
  console.log(searchTerm.value);
  searchTerm.value = "";
};

const debounce = useDebounce(onSearch, 300);
</script>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  border: 1px solid var(--primary-color);
  background-color: rgb(255, 255, 255);
  height: 3rem;
  border-radius: 2rem;
  padding-left: 20px;
  transition: border-color 0.3s;
  width: 35rem;
}

.input-container.focused {
  border-color: var(--secondary-color);
}

.input-field {
  border: none;
  background-color: transparent;
  caret-color: 000;
  flex: 1;
  outline: none;
  color: #000;
  padding: 0.5em;
}

.input-field::placeholder {
  color: #000;
  font-size: 0.9em;
}

.icon-container {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

button {
  height: 2.85rem;
  width: 3rem;
}

button:hover {
  background-color: var(--primary-color);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: solid 1px #000;
  opacity: 50%;
}

.top-bar-icons {
  color: white;
}

@media screen and (max-width: 768px) {
  .input-container {
    height: 2rem;
    padding: 10px;
    width: 100%;
  }

  .input-field::placeholder {
    font-size: 0.8em;
  }

  .icon-container {
    padding: 0.5rem;
  }
}
</style>
