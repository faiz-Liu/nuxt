<template>
  <div class="product-wrapper">
    <div class="product-img">
      <NuxtLink :to="`/product/${product.id}`">
        <img :src="product.image" :alt="product.name">
      </NuxtLink>
      <div class="product-item-dec">
        <ul>
          <li>{{ product.year }}</li>
          <li>{{ product.transmission }}</li>
          <li>{{ product.fuel }}</li>
          <li>{{ product.cc }} CC</li>
        </ul>
      </div>
      <div class="product-action">
        <a class="action-plus-2" title="Add To Cart" href="#" @click.prevent="addToCart">
          <i class="ti-shopping-cart"></i>
        </a>
        <a class="action-cart-2" title="Wishlist" href="#" @click.prevent="addToWishlist">
          <i class="ti-heart"></i>
        </a>
        <a class="action-reload" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
          <i class="ti-zoom-in"></i>
        </a>
      </div>
      <div class="product-content-wrapper">
        <div class="product-title-spreed">
          <h4><NuxtLink :to="`/product/${product.id}`">{{ product.name }}</NuxtLink></h4>
          <span>{{ product.rpm }} RPM</span>
        </div>
        <div class="product-price">
          <span>${{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

function addToCart() {
  console.log('Added to cart:', props.product.name)
}

function addToWishlist() {
  console.log('Added to wishlist:', props.product.name)
}
</script>
