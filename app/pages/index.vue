<template>
  <div>
    <!-- Hero Slider -->
    <HeroSlider />

    <!-- Overview Area -->
    <div class="overview-area pt-135">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="overview-content">
              <h1><span>OSWAN</span> WORLD MOST</h1>
              <h2>LATGEST <span>MOTORCYCLE STORE</span></h2>
              <p><span>OSWAN</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam</p>
              <div class="question-area">
                <h4>HAVE ANY QUESTION?</h4>
                <div class="question-contact">
                  <div class="question-icon">
                    <i class="icofont icofont-phone"></i>
                  </div>
                  <div class="question-content-number">
                    <h6>01245 658 698</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="overview-img">
              <img class="tilter" src="/img/banner/banner-1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner Area -->
    <div class="banner-area pt-135 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-lg-4" v-for="banner in banners" :key="banner.id">
            <div class="banner-wrapper mb-30">
              <a href="#"><img :src="banner.image" alt="image"></a>
              <div class="banner-content">
                <h2>{{ banner.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Area -->
    <div class="product-area pb-190">
      <div class="container">
        <div class="section-title text-center mb-50">
          <h2>CHOOSE YOUR BIKE</h2>
          <p><span>OSWAN</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
        </div>
        <div class="product-tab-list text-center mb-80 nav product-menu-mrg" role="tablist">
          <a
            :class="{ active: activeTab === 'new' }"
            href="#"
            @click.prevent="activeTab = 'new'"
          >
            <h4>NEW BIKES</h4>
          </a>
          <a
            :class="{ active: activeTab === 'used' }"
            href="#"
            @click.prevent="activeTab = 'used'"
          >
            <h4>USED BIKES</h4>
          </a>
        </div>
        <div class="tab-content jump">
          <div class="tab-pane" :class="{ active: activeTab === 'new' }">
            <ProductSlider :products="newBikes" />
          </div>
          <div class="tab-pane" :class="{ active: activeTab === 'used' }">
            <ProductSlider :products="usedBikes" />
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Product Area -->
    <div class="latest-product-area pt-205 pb-145 bg-img" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container-fluid latest-product-container">
        <LatestProductSlider />
      </div>
    </div>

    <!-- Accessories Area -->
    <div class="accessories-area pt-152 pb-130">
      <div class="container-fluid accessories-container">
        <div class="section-title section-fluid text-center mb-60">
          <h2>ACCESSORIES</h2>
          <p><span>OSWAN</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
        </div>
        <div class="accessories-wrapper">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6" v-for="accessory in accessories" :key="accessory.id">
              <AccessoryCard :product="accessory" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial Area -->
    <div class="testimonial-area">
      <div class="container">
        <div class="section-title-2 section-title-position">
          <h2>OUR CLIENTS REVIEW</h2>
        </div>
        <div class="testimonial-active">
          <TestimonialSlider />
        </div>
      </div>
    </div>

    <!-- Blog Area -->
    <div class="blog-area pt-150 pb-110">
      <div class="container">
        <div class="section-title text-center mb-60">
          <h2>BLOG POST</h2>
          <p><span>OSWAN</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="post in blogPosts" :key="post.id">
            <div class="blog-hm-wrapper mb-40">
              <div class="blog-img">
                <NuxtLink :to="`/blog/${post.id}`"><img :src="post.image" alt="image"></NuxtLink>
                <div class="blog-date">
                  <h4>{{ post.date }}</h4>
                </div>
                <div class="blog-hm-social">
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="blog-hm-content">
                <h3><NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink></h3>
                <p><span>OSWAN</span> {{ post.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter Area -->
    <div class="newsletter-area">
      <div class="container">
        <div class="newsletter-wrapper-all theme-bg-2">
          <div class="row">
            <div class="col-lg-5 col-12 col-md-12">
              <div class="newsletter-img bg-img" style="background-image: url(/img/banner/newsletter-bg.png)">
                <img alt="image" src="/img/team/newsletter-img.png">
              </div>
            </div>
            <div class="col-lg-7 col-12 col-md-12">
              <div class="newsletter-wrapper text-center">
                <div class="newsletter-title">
                  <h3>Subscribe our newsletter</h3>
                </div>
                <div class="subscribe-form">
                  <form @submit.prevent="subscribeNewsletter">
                    <div class="mc-form">
                      <input type="email" v-model="email" placeholder="Enter your email here..." required>
                      <div class="clear">
                        <button type="submit">Subscribe</button>
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
</template>

<script setup>
const activeTab = ref('new')
const email = ref('')

const banners = [
  { id: 1, image: '/img/banner/banner-1.jpg', title: 'BUY NEW BIKE' },
  { id: 2, image: '/img/banner/banner-2.jpg', title: 'SELL YOUR BIKE' },
  { id: 3, image: '/img/banner/banner-3.jpg', title: 'FIND SPARE PARTS' }
]

const newBikes = [
  { id: 1, name: 'Gloriori GSX 250 R', price: 2549, rpm: 6600, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-1.jpg' },
  { id: 2, name: 'Demonissi Gori', price: 2549, rpm: 6700, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 480, image: '/img/product/product-4.jpg' },
  { id: 3, name: 'Klager GSX 250 R', price: 2549, rpm: 5500, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 200, image: '/img/product/product-2.jpg' },
  { id: 4, name: 'Maxclon ZPE 54', price: 2549, rpm: 3300, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-5.jpg' },
  { id: 5, name: 'Matrio Max', price: 2549, rpm: 4600, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-3.jpg' },
  { id: 6, name: 'Rigoniss Z 1000', price: 2549, rpm: 8000, year: 2018, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-6.jpg' }
]

const usedBikes = [
  { id: 7, name: 'Gloriori GSX 250 R', price: 1549, rpm: 6600, year: 2016, transmission: 'MANUAL', fuel: 'PETROL', cc: 250, image: '/img/product/product-6.jpg' },
  { id: 8, name: 'Demonissi Gori', price: 1549, rpm: 6700, year: 2016, transmission: 'MANUAL', fuel: 'PETROL', cc: 480, image: '/img/product/product-5.jpg' },
  { id: 9, name: 'Klager GSX 250 R', price: 1549, rpm: 5500, year: 2016, transmission: 'MANUAL', fuel: 'PETROL', cc: 200, image: '/img/product/product-4.jpg' },
  { id: 10, name: 'Maxclon ZPE 54', price: 1549, rpm: 3300, year: 2016, transmission: 'MANUAL', fuel: 'PETROL', cc: 150, image: '/img/product/product-3.jpg' }
]

const accessories = [
  { id: 1, name: 'Aerion Carbon Helmet', price: 120, image: '/img/product/product-7.jpg' },
  { id: 2, name: 'Reckles Jacket', price: 180, image: '/img/product/product-8.jpg' },
  { id: 3, name: 'Softy Original Glove', price: 25, image: '/img/product/product-9.jpg' },
  { id: 4, name: 'Flicky Traco Boot', price: 140, image: '/img/product/product-10.jpg' }
]

const blogPosts = [
  { id: 1, title: 'Sports Motorbike for play in desert', date: '24 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-1.jpg' },
  { id: 2, title: 'Motorbike Racing at October', date: '22 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-2.jpg' },
  { id: 3, title: 'Latest Motorbike Release this Year', date: '20 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-3.jpg' }
]

function subscribeNewsletter() {
  console.log('Subscribed:', email.value)
  email.value = ''
}
</script>

<style scoped>
.pt-135 {
  padding-top: 135px;
}
.pt-152 {
  padding-top: 152px;
}
.pt-150 {
  padding-top: 150px;
}
.pt-205 {
  padding-top: 205px;
}
.pb-120 {
  padding-bottom: 120px;
}
.pb-130 {
  padding-bottom: 130px;
}
.pb-145 {
  padding-bottom: 145px;
}
.pb-110 {
  padding-bottom: 110px;
}
.pb-190 {
  padding-bottom: 190px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mb-60 {
  margin-bottom: 60px;
}
.mb-80 {
  margin-bottom: 80px;
}
.mb-30 {
  margin-bottom: 30px;
}
.mb-40 {
  margin-bottom: 40px;
}

.latest-product-container {
  padding: 0 200px 0 0;
}

.accessories-container {
  padding: 0 200px;
}

@media (max-width: 1199px) {
  .latest-product-container,
  .accessories-container {
    padding: 0 15px;
  }
}

/* Newsletter Subscribe Button */
.subscribe-form form {
  position: relative;
}

.subscribe-form .mc-form {
  position: relative;
}

.subscribe-form .mc-form input[type="email"] {
  background: transparent;
  border: 1px solid #876830;
  color: #001232;
  font-size: 14px;
  height: 45px;
  padding-left: 24px;
  padding-right: 78px;
  width: 100%;
}

.subscribe-form .mc-form input[type="email"]::placeholder {
  color: #001232;
}

.subscribe-form .mc-form .clear {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 999;
}

.subscribe-form .mc-form .clear button {
  background-color: #001232;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 0;
  height: 45px;
  width: 77px;
  position: relative;
  transition: all 0.3s ease;
}

.subscribe-form .mc-form .clear button::before {
  content: "\f1d8";
  font-family: FontAwesome;
  font-size: 18px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}

.subscribe-form .mc-form .clear button:hover {
  background-color: #fff;
}

.subscribe-form .mc-form .clear button:hover::before {
  color: #001232;
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .pt-135 {
    padding-top: 80px;
  }
  .pt-152 {
    padding-top: 80px;
  }
  .pt-150 {
    padding-top: 70px;
  }
  .pt-205 {
    padding-top: 100px;
  }
  .pb-120 {
    padding-bottom: 45px;
  }
  .pb-130 {
    padding-bottom: 50px;
  }
  .pb-145 {
    padding-bottom: 60px;
  }
  .pb-110 {
    padding-bottom: 50px;
  }
  .pb-190 {
    padding-bottom: 110px;
  }
  .mb-50 {
    margin-bottom: 35px;
  }
  .mb-60 {
    margin-bottom: 50px;
  }
  .mb-80 {
    margin-bottom: 50px;
  }
  .overview-img {
    margin-top: 40px;
  }
  .overview-content h1 {
    font-size: 33px;
  }
  .overview-content h2 {
    font-size: 24px;
    line-height: 40px;
  }
  .newsletter-wrapper {
    padding: 37px 10px 44px;
  }
  .newsletter-img img {
    margin-left: 0;
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .overview-img {
    margin-top: 50px;
  }
  .newsletter-wrapper {
    padding: 20px 70px 24px 40px;
  }
}
</style>
