<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>WISHLIST</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Wishlist</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Wishlist Area -->
    <div class="wishlist-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="table-content wishlist">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th>Add to Cart</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in wishlistItems" :key="item.id">
                    <td class="product-thumbnail">
                      <NuxtLink :to="`/product/${item.id}`">
                        <img :src="item.image" :alt="item.name">
                      </NuxtLink>
                    </td>
                    <td class="product-name">
                      <NuxtLink :to="`/product/${item.id}`">{{ item.name }}</NuxtLink>
                    </td>
                    <td class="product-price">
                      <span class="amount">${{ item.price }}</span>
                    </td>
                    <td class="product-stock">
                      <span :class="item.inStock ? 'in-stock' : 'out-stock'">
                        {{ item.inStock ? 'In Stock' : 'Out of Stock' }}
                      </span>
                    </td>
                    <td class="product-cart-icon product-subtotal">
                      <a href="#" @click.prevent="addToCart(item)"><i class="ti-shopping-cart"></i></a>
                    </td>
                    <td class="product-remove">
                      <a href="#" @click.prevent="removeItem(item.id)"><i class="icofont icofont-ui-delete"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cart-shiping-update mt-40">
              <NuxtLink to="/shop" class="btn-style">Continue Shopping</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const wishlistItems = ref([
  { id: 1, name: 'Gloriori GSX 250 R', price: 2549, image: '/img/product/product-1.jpg', inStock: true },
  { id: 2, name: 'Aerion Carbon Helmet', price: 120, image: '/img/product/product-7.jpg', inStock: true },
  { id: 3, name: 'Reckles Jacket', price: 180, image: '/img/product/product-8.jpg', inStock: false }
])

function addToCart(item) {
  console.log('Added to cart:', item.name)
}

function removeItem(id) {
  wishlistItems.value = wishlistItems.value.filter(item => item.id !== id)
}
</script>

<style scoped>
.pt-200 {
  padding-top: 200px;
}
.pb-200 {
  padding-bottom: 200px;
}
.pt-100 {
  padding-top: 100px;
}
.pb-100 {
  padding-bottom: 100px;
}
.mt-40 {
  margin-top: 40px;
}

.table-content table {
  width: 100%;
}

.table-content th {
  border-bottom: 3px solid #e1e1e1;
  padding: 0 10px 12px;
}

.table-content td {
  padding: 30px 10px;
  vertical-align: middle;
}

.product-thumbnail img {
  width: 100px;
}

.in-stock {
  color: #4caf50;
}

.out-stock {
  color: #f44336;
}

.product-cart-icon a {
  font-size: 20px;
  color: #333;
}

.product-cart-icon a:hover {
  color: #ffb52f;
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .pt-200 {
    padding-top: 100px;
  }
  .pb-200 {
    padding-bottom: 100px;
  }
  .pt-100 {
    padding-top: 50px;
  }
  .pb-100 {
    padding-bottom: 50px;
  }
  .breadcrumb-content h2 {
    font-size: 25px;
    letter-spacing: 0;
  }
  .table-content table td {
    padding: 30px 6px 0;
  }
}
</style>
