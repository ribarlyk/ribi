<template>
  <div class="logo-container">
    <NuxtImg
      class="logo"
      width="120"
      height="10"
      src="https://dvxs8unt9ljwj.cloudfront.net/10203353.jpg"
    />

    <div class="actions-wrapper">
      <Icon name="clarity:user-line" color="var(--secondary-color)" />
      <Icon name="clarity:heart-line" color="var(--secondary-color)" />
      <Icon name="clarity:shopping-cart-line" color="var(--secondary-color)" />
    </div>
    <p class="cart-price">0,00лв</p>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw; /* Adjust as necessary */
}

.logo {
  margin: 0 auto;
}

.actions-wrapper {
  display: flex;
  gap: 1rem; /* Adjust spacing between icons as necessary */
}

.cart-price {
  font-size: 12px;
  align-self: center;
  padding-left: 1em;
}

</style>
