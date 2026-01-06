<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>SHOPPING CART</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Cart Area -->
    <div class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="table-content">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id">
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
                    <td class="product-quantity">
                      <div class="cart-plus-minus">
                        <div class="dec qtybutton" @click="decreaseQty(item)">-</div>
                        <input type="text" :value="item.qty" class="cart-plus-minus-box" readonly>
                        <div class="inc qtybutton" @click="increaseQty(item)">+</div>
                      </div>
                    </td>
                    <td class="product-subtotal">${{ (item.price * item.qty).toFixed(2) }}</td>
                    <td class="product-remove">
                      <a href="#" @click.prevent="removeItem(item.id)"><i class="icofont icofont-ui-delete"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cart-shiping-update mt-40">
              <div class="update-checkout-cart">
                <NuxtLink to="/shop" class="btn-style">Continue Shopping</NuxtLink>
                <button class="btn-style" @click="updateCart">Update Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-60">
          <div class="col-lg-6">
            <div class="discount-code">
              <h4>Coupon Code</h4>
              <form @submit.prevent="applyCoupon">
                <div class="coupon">
                  <input type="text" v-model="couponCode" placeholder="Enter coupon code">
                  <button type="submit" class="btn-style">Apply</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="shop-total">
              <h3>Cart Totals</h3>
              <ul>
                <li>Subtotal <span>${{ subtotal.toFixed(2) }}</span></li>
                <li>Shipping <span>Free</span></li>
                <li class="order-total">Total <span>${{ total.toFixed(2) }}</span></li>
              </ul>
              <div class="cart-btn">
                <NuxtLink to="/checkout">Proceed to Checkout</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const couponCode = ref('')

const cartItems = ref([
  { id: 1, name: 'Gloriori GSX 250 R', price: 2549, qty: 1, image: '/img/product/product-1.jpg' },
  { id: 2, name: 'Aerion Carbon Helmet', price: 120, qty: 2, image: '/img/product/product-7.jpg' }
])

const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0))
const total = computed(() => subtotal.value)

function increaseQty(item) {
  item.qty++
}

function decreaseQty(item) {
  if (item.qty > 1) {
    item.qty--
  }
}

function removeItem(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}

function updateCart() {
  console.log('Cart updated')
}

function applyCoupon() {
  console.log('Coupon applied:', couponCode.value)
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
.mt-60 {
  margin-top: 60px;
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

.cart-plus-minus {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  width: fit-content;
}

.qtybutton {
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cart-plus-minus-box {
  width: 40px;
  height: 40px;
  text-align: center;
  border: none;
}

.discount-code {
  background: #f7f7f7;
  padding: 30px;
}

.coupon {
  display: flex;
  gap: 10px;
}

.coupon input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
}

.shop-total {
  background: #f7f7f7;
  padding: 30px;
}

.shop-total h3 {
  background: #ffb52f;
  color: #fff;
  padding: 15px 20px;
  margin: -30px -30px 20px;
}

.shop-total ul li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.cart-btn a {
  display: block;
  text-align: center;
  background: #333;
  color: #fff;
  padding: 15px;
  margin-top: 20px;
}

.cart-btn a:hover {
  background: #ffb52f;
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
  .cart-shiping-update {
    display: block;
  }
  .update-checkout-cart {
    margin-top: 10px;
  }
  .discount-code {
    margin-right: 0;
    padding: 55px 15px;
    margin-bottom: 30px;
  }
}
</style>
