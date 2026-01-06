<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>PRODUCT DETAILS</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/shop">Shop</NuxtLink></li>
            <li>Product Details</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Product Details Area -->
    <div class="product-details-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="product-details-large">
              <div class="tab-content">
                <div
                  v-for="(image, index) in productImages"
                  :key="index"
                  class="tab-pane"
                  :class="{ active: activeImage === index }"
                >
                  <img :src="image" alt="product">
                </div>
              </div>
            </div>
            <div class="product-details-small">
              <div class="product-dec-slider">
                <a
                  v-for="(image, index) in productImages"
                  :key="index"
                  href="#"
                  :class="{ active: activeImage === index }"
                  @click.prevent="activeImage = index"
                >
                  <img :src="image" alt="product">
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="product-details-content">
              <h2>{{ product.name }}</h2>
              <span class="pd-sub-title">{{ product.subtitle }}</span>
              <div class="quick-view-rating">
                <i class="fa fa-star reting-color"></i>
                <i class="fa fa-star reting-color"></i>
                <i class="fa fa-star reting-color"></i>
                <i class="fa fa-star reting-color"></i>
                <i class="fa fa-star reting-color"></i>
              </div>
              <div class="price">
                <span class="new">${{ product.price }}</span>
                <span class="old" v-if="product.oldPrice">${{ product.oldPrice }}</span>
              </div>
              <div class="product-overview">
                <p>{{ product.description }}</p>
              </div>
              <div class="product-color">
                <ul>
                  <li class="red">red</li>
                  <li class="pink">pink</li>
                  <li class="blue">blue</li>
                  <li class="sky2">sky</li>
                  <li class="green">green</li>
                </ul>
              </div>
              <div class="quickview-plus-minus">
                <div class="cart-plus-minus">
                  <div class="dec qtybutton" @click="decreaseQty">-</div>
                  <input type="text" :value="quantity" class="cart-plus-minus-box" readonly>
                  <div class="inc qtybutton" @click="increaseQty">+</div>
                </div>
                <div class="quickview-btn-cart">
                  <a class="btn-style" href="#" @click.prevent="addToCart">add to cart</a>
                </div>
                <div class="quickview-btn-wishlist">
                  <a class="btn-hover" href="#" @click.prevent="addToWishlist"><i class="icofont icofont-heart-alt"></i></a>
                </div>
              </div>
              <div class="product-categories">
                <ul>
                  <li>Category:</li>
                  <li><a href="#">{{ product.category }}</a></li>
                </ul>
              </div>
              <div class="product-share">
                <ul>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                  <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Description Tabs -->
        <div class="description-review-area mt-60">
          <div class="description-review-wrapper">
            <div class="description-review-topbar nav">
              <a
                :class="{ active: activeTab === 'description' }"
                href="#"
                @click.prevent="activeTab = 'description'"
              >Description</a>
              <a
                :class="{ active: activeTab === 'reviews' }"
                href="#"
                @click.prevent="activeTab = 'reviews'"
              >Reviews ({{ reviews.length }})</a>
            </div>
            <div class="tab-content">
              <div class="tab-pane" :class="{ active: activeTab === 'description' }">
                <div class="description-wrap">
                  <p>{{ product.fullDescription }}</p>
                </div>
              </div>
              <div class="tab-pane" :class="{ active: activeTab === 'reviews' }">
                <div class="review-wrapper">
                  <div v-for="review in reviews" :key="review.id" class="single-review mb-30">
                    <div class="review-img">
                      <img :src="review.avatar" alt="">
                    </div>
                    <div class="review-content">
                      <div class="review-top-wrap">
                        <div class="review-left">
                          <div class="review-name">
                            <h4>{{ review.name }}</h4>
                          </div>
                          <div class="quick-view-rating">
                            <i v-for="n in 5" :key="n" class="fa fa-star" :class="{ 'reting-color': n <= review.rating }"></i>
                          </div>
                        </div>
                      </div>
                      <p>{{ review.comment }}</p>
                    </div>
                  </div>
                  <div class="ratting-form-wrapper">
                    <h3>Add a Review</h3>
                    <form @submit.prevent="submitReview">
                      <div class="row">
                        <div class="col-md-6">
                          <input type="text" v-model="newReview.name" placeholder="Name" required>
                        </div>
                        <div class="col-md-6">
                          <input type="email" v-model="newReview.email" placeholder="Email" required>
                        </div>
                        <div class="col-12">
                          <textarea v-model="newReview.comment" placeholder="Your review" required></textarea>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn-style">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const productId = route.params.id

const activeImage = ref(0)
const activeTab = ref('description')
const quantity = ref(1)

const productImages = [
  '/img/product/product-1.jpg',
  '/img/product/product-2.jpg',
  '/img/product/product-3.jpg',
  '/img/product/product-4.jpg'
]

const product = {
  id: productId,
  name: 'Gloriori GSX 250 R',
  subtitle: 'Sport Motorcycle',
  price: 2549,
  oldPrice: 2999,
  category: 'Sport Bikes',
  description: 'High performance sport bike with excellent handling and powerful engine. Perfect for both city riding and long distance touring.',
  fullDescription: 'The Gloriori GSX 250 R is a high-performance sport motorcycle designed for riders who demand the best. With its powerful 250cc engine, advanced suspension system, and aerodynamic design, this bike delivers an exhilarating riding experience. Features include LED lighting, digital instrument cluster, and premium braking system.'
}

const reviews = ref([
  { id: 1, name: 'John Doe', rating: 5, comment: 'Excellent bike! Great performance and handling.', avatar: '/img/team/1.jpg' },
  { id: 2, name: 'Jane Smith', rating: 4, comment: 'Very satisfied with my purchase. Highly recommended.', avatar: '/img/team/2.jpg' }
])

const newReview = ref({
  name: '',
  email: '',
  comment: ''
})

function increaseQty() {
  quantity.value++
}

function decreaseQty() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function addToCart() {
  console.log('Added to cart:', product.name, 'Qty:', quantity.value)
}

function addToWishlist() {
  console.log('Added to wishlist:', product.name)
}

function submitReview() {
  console.log('Review submitted:', newReview.value)
  newReview.value = { name: '', email: '', comment: '' }
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
.mt-60 {
  margin-top: 60px;
}
.mb-30 {
  margin-bottom: 30px;
}

.product-details-large .tab-pane {
  display: none;
}

.product-details-large .tab-pane.active {
  display: block;
}

.product-details-large img {
  width: 100%;
}

.product-dec-slider {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.product-dec-slider a {
  flex: 0 0 80px;
  border: 2px solid transparent;
}

.product-dec-slider a.active {
  border-color: #ffb52f;
}

.product-dec-slider img {
  width: 100%;
}

.description-review-topbar {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
}

.description-review-topbar a {
  padding: 15px 30px;
  color: #333;
  font-weight: 500;
}

.description-review-topbar a.active {
  border-bottom: 2px solid #ffb52f;
  color: #ffb52f;
}

.tab-content .tab-pane {
  display: none;
}

.tab-content .tab-pane.active {
  display: block;
}

.single-review {
  display: flex;
  gap: 20px;
}

.review-img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.ratting-form-wrapper input,
.ratting-form-wrapper textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
}

.ratting-form-wrapper textarea {
  height: 150px;
}
</style>
