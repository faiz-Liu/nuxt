<template>
  <div class="header-cart">
    <button class="icon-cart" @click="toggleCart">
      <i class="ti-shopping-cart"></i>
      <span class="count-style">{{ cartCount }}</span>
      <span class="count-price-add">${{ cartTotal }}</span>
    </button>
    <div class="shopping-cart-content" :class="{ 'cart-visible': cartOpen }">
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="single-shopping-cart">
          <div class="shopping-cart-img">
            <a href="#"><img :alt="item.name" :src="item.image"></a>
          </div>
          <div class="shopping-cart-title">
            <h3><a href="#">{{ item.name }}</a></h3>
            <span>Price: ${{ item.price }}</span>
            <span>Qty: {{ item.qty }}</span>
          </div>
          <div class="shopping-cart-delete">
            <a href="#" @click.prevent="removeItem(item.id)"><i class="icofont icofont-ui-delete"></i></a>
          </div>
        </li>
      </ul>
      <div class="shopping-cart-total">
        <h4>total: <span>${{ cartTotal }}</span></h4>
      </div>
      <div class="shopping-cart-btn">
        <NuxtLink class="btn-style cr-btn" to="/checkout">checkout</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const cartOpen = ref(false)

const cartItems = ref([
  { id: 1, name: 'Gloriori GSX 250 R', price: 275, qty: 1, image: '/img/cart/cart-1.jpg' },
  { id: 2, name: 'Demonissi Gori', price: 275, qty: 1, image: '/img/cart/cart-2.jpg' }
])

const cartCount = computed(() => cartItems.value.length)
const cartTotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2))

function toggleCart() {
  cartOpen.value = !cartOpen.value
}

function removeItem(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>

<style scoped>
.shopping-cart-content.cart-visible {
  display: block !important;
}
</style>
