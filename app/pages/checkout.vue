<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>CHECKOUT</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Checkout</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Checkout Area -->
    <div class="checkout-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="checkbox-form">
              <h3>Billing Details</h3>
              <div class="row">
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>First Name <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.firstName" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Last Name <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.lastName" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Company Name</label>
                    <input type="text" v-model="billingForm.company">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="country-select">
                    <label>Country <span class="required">*</span></label>
                    <select v-model="billingForm.country">
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Address <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.address" placeholder="Street address" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Town / City <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.city" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>State / County <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.state" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Postcode / Zip <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.postcode" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Email Address <span class="required">*</span></label>
                    <input type="email" v-model="billingForm.email" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>Phone <span class="required">*</span></label>
                    <input type="text" v-model="billingForm.phone" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>Order Notes</label>
                    <textarea v-model="billingForm.notes" placeholder="Notes about your order"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="your-order">
              <h3>Your Order</h3>
              <div class="your-order-table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cartItems" :key="item.id">
                      <td>{{ item.name }} <span class="product-quantity">× {{ item.qty }}</span></td>
                      <td>${{ (item.price * item.qty).toFixed(2) }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Subtotal</th>
                      <td>${{ subtotal.toFixed(2) }}</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>Free</td>
                    </tr>
                    <tr class="order-total">
                      <th>Total</th>
                      <td><span>${{ total.toFixed(2) }}</span></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="payment-method mt-30">
                <div class="payment-accordion">
                  <div class="payment-option">
                    <input type="radio" v-model="paymentMethod" value="bank" id="bank">
                    <label for="bank">Direct Bank Transfer</label>
                  </div>
                  <div class="payment-option">
                    <input type="radio" v-model="paymentMethod" value="check" id="check">
                    <label for="check">Check Payment</label>
                  </div>
                  <div class="payment-option">
                    <input type="radio" v-model="paymentMethod" value="paypal" id="paypal">
                    <label for="paypal">PayPal</label>
                  </div>
                </div>
              </div>
              <div class="order-button-payment">
                <button type="submit" @click="placeOrder">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const paymentMethod = ref('bank')

const billingForm = ref({
  firstName: '',
  lastName: '',
  company: '',
  country: '',
  address: '',
  city: '',
  state: '',
  postcode: '',
  email: '',
  phone: '',
  notes: ''
})

const cartItems = ref([
  { id: 1, name: 'Gloriori GSX 250 R', price: 2549, qty: 1 },
  { id: 2, name: 'Aerion Carbon Helmet', price: 120, qty: 2 }
])

const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0))
const total = computed(() => subtotal.value)

function placeOrder() {
  console.log('Order placed:', { billing: billingForm.value, payment: paymentMethod.value })
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
.mt-30 {
  margin-top: 30px;
}

.checkout-form-list {
  margin-bottom: 20px;
}

.checkout-form-list label {
  display: block;
  margin-bottom: 5px;
}

.checkout-form-list input,
.checkout-form-list textarea,
.country-select select {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
}

.checkout-form-list textarea {
  height: 100px;
}

.required {
  color: #ffb52f;
}

.payment-option {
  margin-bottom: 10px;
}

.payment-option input {
  margin-right: 10px;
}

.order-button-payment button {
  width: 100%;
  padding: 15px;
  background: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 20px;
}

.order-button-payment button:hover {
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
  .your-order {
    margin-bottom: 50px;
    padding: 30px 10px 45px;
  }
}
</style>
