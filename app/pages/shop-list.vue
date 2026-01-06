<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>SHOP LIST</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Shop List</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Shop Area -->
    <div class="shop-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <!-- Sidebar -->
          <div class="col-lg-3 col-md-4">
            <div class="sidebar-wrapper">
              <div class="sidebar-search mb-40">
                <form @submit.prevent="searchProducts">
                  <input type="text" v-model="searchQuery" placeholder="Search...">
                  <button type="submit"><i class="icofont icofont-search-1"></i></button>
                </form>
              </div>
              <div class="product-sidebar-single mb-40">
                <h3 class="sidebar-widget">CATEGORIES</h3>
                <div class="widget-categories">
                  <ul>
                    <li v-for="category in categories" :key="category">
                      <a href="#">{{ category }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Products List -->
          <div class="col-lg-9 col-md-8">
            <div class="shop-topbar-wrapper">
              <div class="view-mode">
                <ul>
                  <li><NuxtLink to="/shop"><i class="ti-layout-grid3"></i></NuxtLink></li>
                  <li class="active"><a href="#"><i class="ti-view-list"></i></a></li>
                </ul>
              </div>
              <div class="product-sorting">
                <select v-model="sortBy" class="orderby">
                  <option value="default">Default sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div class="product-list-view">
              <div v-for="product in sortedProducts" :key="product.id" class="shop-list-wrapper mb-30">
                <div class="row">
                  <div class="col-lg-4 col-md-5">
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
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-7">
                    <div class="shop-list-content">
                      <h3><NuxtLink :to="`/product/${product.id}`">{{ product.name }}</NuxtLink></h3>
                      <div class="quick-view-rating">
                        <i class="fa fa-star reting-color"></i>
                        <i class="fa fa-star reting-color"></i>
                        <i class="fa fa-star reting-color"></i>
                        <i class="fa fa-star reting-color"></i>
                        <i class="fa fa-star reting-color"></i>
                      </div>
                      <span class="price">${{ product.price }}</span>
                      <p>{{ product.description }}</p>
                      <div class="shop-list-cart">
                        <a href="#" @click.prevent="addToCart(product)"><i class="ti-shopping-cart"></i> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pagination-style text-center mt-30">
              <ul>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const sortBy = ref('default')

const categories = ['Sport Bikes', 'Cruiser', 'Touring', 'Standard', 'Off-Road']

const products = ref([
  { id: 1, name: 'Gloriori GSX 250 R', price: 2549, rpm: 6600, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-1.jpg', description: 'High performance sport bike with excellent handling and powerful engine.' },
  { id: 2, name: 'Klager GSX 250 R', price: 2549, rpm: 5500, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 200, image: '/img/product/product-2.jpg', description: 'Reliable and efficient motorcycle for daily commute and city riding.' },
  { id: 3, name: 'Matrio Max', price: 2549, rpm: 4600, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-3.jpg', description: 'Compact and agile bike perfect for city riding and beginners.' },
  { id: 4, name: 'Demonissi Gori', price: 2549, rpm: 6700, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 480, image: '/img/product/product-4.jpg', description: 'Powerful engine with smooth acceleration and premium features.' },
  { id: 5, name: 'Maxclon ZPE 54', price: 2549, rpm: 3300, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-5.jpg', description: 'Economical choice with great fuel efficiency for everyday use.' },
  { id: 6, name: 'Rigoniss Z 1000', price: 2549, rpm: 8000, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-6.jpg', description: 'Top-tier performance motorcycle for enthusiasts and professionals.' }
])

const sortedProducts = computed(() => {
  let sorted = [...products.value]
  switch (sortBy.value) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price)
      break
  }
  return sorted
})

function searchProducts() {
  console.log('Searching:', searchQuery.value)
}

function addToCart(product) {
  console.log('Added to cart:', product.name)
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
.mb-40 {
  margin-bottom: 40px;
}
.mb-30 {
  margin-bottom: 30px;
}
.mt-30 {
  margin-top: 30px;
}

.sidebar-search {
  position: relative;
}

.sidebar-search input {
  width: 100%;
  height: 45px;
  padding: 0 50px 0 15px;
  border: 1px solid #ddd;
}

.sidebar-search button {
  position: absolute;
  right: 0;
  top: 0;
  height: 45px;
  width: 45px;
  background: #ffb52f;
  border: none;
  cursor: pointer;
}

.shop-list-wrapper {
  border: 1px solid #eee;
  padding: 20px;
}

.shop-list-content h3 {
  margin-bottom: 10px;
}

.shop-list-content .price {
  font-size: 20px;
  font-weight: bold;
  color: #ffb52f;
  display: block;
  margin: 10px 0;
}

.shop-list-cart a {
  background: #333;
  color: #fff;
  padding: 10px 20px;
  display: inline-block;
  margin-top: 15px;
}

.shop-list-cart a:hover {
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
  .shop-topbar-wrapper {
    margin-top: 50px;
    display: block;
  }
  .product-sorting {
    display: block;
    margin-top: 20px;
  }
  .shop-list-wrapper .row {
    display: block;
  }
  .shop-list-wrapper .product-img {
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .shop-topbar-wrapper {
    margin-top: 50px;
  }
}
</style>
