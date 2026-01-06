<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>SHOP</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Shop</li>
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
              <!-- Search -->
              <div class="sidebar-search mb-40">
                <form @submit.prevent="searchProducts">
                  <input type="text" v-model="searchQuery" placeholder="Search...">
                  <button type="submit"><i class="icofont icofont-search-1"></i></button>
                </form>
              </div>

              <!-- Categories -->
              <div class="product-sidebar-single mb-40">
                <h3 class="sidebar-widget">CATEGORIES</h3>
                <div class="widget-categories">
                  <ul>
                    <li v-for="category in categories" :key="category">
                      <a href="#" @click.prevent="filterByCategory(category)">{{ category }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Price Filter -->
              <div class="product-sidebar-single mb-40">
                <h3 class="sidebar-widget">PRICE</h3>
                <div class="price_filter">
                  <div class="price-slider-wrapper">
                    <input type="range" v-model="priceRange[0]" min="0" max="5000" class="price-slider">
                    <input type="range" v-model="priceRange[1]" min="0" max="5000" class="price-slider">
                  </div>
                  <div class="price_slider_amount">
                    <div class="label-input">
                      <label>Price:</label>
                      <input type="text" :value="`$${priceRange[0]} - $${priceRange[1]}`" readonly>
                    </div>
                    <button @click="filterByPrice">Filter</button>
                  </div>
                </div>
              </div>

              <!-- Colors -->
              <div class="product-sidebar-single mb-40">
                <h3 class="sidebar-widget">COLOR</h3>
                <div class="product-color">
                  <ul>
                    <li class="blue" @click="filterByColor('blue')">blue</li>
                    <li class="yellow" @click="filterByColor('yellow')">yellow</li>
                    <li class="gray" @click="filterByColor('gray')">gray</li>
                    <li class="puce" @click="filterByColor('puce')">puce</li>
                    <li class="black" @click="filterByColor('black')">black</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Products -->
          <div class="col-lg-9 col-md-8">
            <!-- Topbar -->
            <div class="shop-topbar-wrapper">
              <div class="view-mode">
                <ul>
                  <li :class="{ active: viewMode === 'grid' }">
                    <a href="#" @click.prevent="viewMode = 'grid'"><i class="ti-layout-grid3"></i></a>
                  </li>
                  <li :class="{ active: viewMode === 'list' }">
                    <a href="#" @click.prevent="viewMode = 'list'"><i class="ti-view-list"></i></a>
                  </li>
                </ul>
              </div>
              <div class="product-sorting">
                <select v-model="sortBy" class="orderby">
                  <option value="default">Default sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            <!-- Product Grid -->
            <div class="product-view" :class="viewMode === 'list' ? 'product-list' : 'product-grid'">
              <div class="row">
                <div
                  v-for="product in sortedProducts"
                  :key="product.id"
                  :class="viewMode === 'list' ? 'col-12' : 'col-lg-4 col-md-6'"
                >
                  <div class="product-wrapper mb-30">
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
                        <a class="action-plus-2" title="Add To Cart" href="#" @click.prevent="addToCart(product)">
                          <i class="ti-shopping-cart"></i>
                        </a>
                        <a class="action-cart-2" title="Wishlist" href="#" @click.prevent="addToWishlist(product)">
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
                    <!-- List View Details -->
                    <div v-if="viewMode === 'list'" class="product-list-details">
                      <h2><NuxtLink :to="`/product/${product.id}`">{{ product.name }}</NuxtLink></h2>
                      <div class="quick-view-rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <p>{{ product.description }}</p>
                      <div class="shop-list-cart">
                        <a href="#" @click.prevent="addToCart(product)"><i class="ti-shopping-cart"></i> Add to cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="pagination-style text-center mt-30">
              <ul>
                <li v-for="page in totalPages" :key="page">
                  <a href="#" :class="{ active: currentPage === page }" @click.prevent="goToPage(page)">{{ page }}</a>
                </li>
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
const viewMode = ref('grid')
const sortBy = ref('default')
const currentPage = ref(1)
const priceRange = ref([0, 5000])

const categories = ['Sport Bikes', 'Cruiser', 'Touring', 'Standard', 'Off-Road']

const products = ref([
  { id: 1, name: 'Gloriori GSX 250 R', price: 2549, rpm: 6600, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-1.jpg', description: 'High performance sport bike with excellent handling.' },
  { id: 2, name: 'Klager GSX 250 R', price: 2549, rpm: 5500, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 200, image: '/img/product/product-2.jpg', description: 'Reliable and efficient motorcycle for daily commute.' },
  { id: 3, name: 'Matrio Max', price: 2549, rpm: 4600, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-3.jpg', description: 'Compact and agile bike perfect for city riding.' },
  { id: 4, name: 'Demonissi Gori', price: 2549, rpm: 6700, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 480, image: '/img/product/product-4.jpg', description: 'Powerful engine with smooth acceleration.' },
  { id: 5, name: 'Maxclon ZPE 54', price: 2549, rpm: 3300, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-5.jpg', description: 'Economical choice with great fuel efficiency.' },
  { id: 6, name: 'Rigoniss Z 1000', price: 2549, rpm: 8000, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-6.jpg', description: 'Top-tier performance motorcycle for enthusiasts.' }
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
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
  }
  return sorted
})

const totalPages = computed(() => Math.ceil(products.value.length / 6))

function searchProducts() {
  console.log('Searching:', searchQuery.value)
}

function filterByCategory(category) {
  console.log('Filter by category:', category)
}

function filterByPrice() {
  console.log('Filter by price:', priceRange.value)
}

function filterByColor(color) {
  console.log('Filter by color:', color)
}

function addToCart(product) {
  console.log('Added to cart:', product.name)
}

function addToWishlist(product) {
  console.log('Added to wishlist:', product.name)
}

function goToPage(page) {
  currentPage.value = page
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

.price-slider-wrapper {
  margin-bottom: 20px;
}

.price-slider {
  width: 100%;
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
}

@media (min-width: 768px) and (max-width: 991px) {
  .shop-topbar-wrapper {
    margin-top: 50px;
  }
  .res-mrg-top {
    margin-top: 50px;
  }
}
</style>
