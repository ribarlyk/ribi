<template>
  <div class="info-bar hide-on-smartphones bg-#fff p-2 flex justify-between">
    <span>
      <h3 class="text-#fff font-bold">
        БЕЗПЛАТНА ДОСТАВКА ЗА ПОРЪЧКИ НАД 100 ЛЕВА
      </h3>
    </span>
    <span>
      <h3 class="text-#000 font-bold">
        <Icon name="phone" color="var(--secondary-color)" /> 0888888888
      </h3>
    </span>
  </div>
</template>

<style scoped>
/* Hide elements on smartphones (screen width up to 767px) */
@media only screen and (max-width: 767px) {
  .hide-on-smartphones {
    display: none !important;
  }
}

.info-bar {
  border-bottom: 2px solid var(--secondary-color);
}
</style>
