<template>
  <div class="latest-product-slider-wrapper">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="single-latest-product slider-animated-2"
      :class="{ active: currentIndex === index }"
    >
      <div class="row">
        <div class="col-lg-7 col-md-12 col-12">
          <div class="latest-product-img">
            <img class="animated" :src="slide.image" alt="image">
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-12">
          <div class="latest-product-content">
            <h2 class="animated">{{ slide.title }}</h2>
            <p class="animated"><span>OSWAN</span> {{ slide.description }}</p>
            <div class="latest-price">
              <h3 class="animated">NOW AT <span>${{ slide.price }}</span></h3>
              <span class="animated">{{ slide.discount }}% DISCOUNT</span>
            </div>
            <div class="latext-btn">
              <a class="animated" href="#">SELECT A BIKE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slider-nav">
      <button @click="prevSlide">PRE</button>
      <button @click="nextSlide">NEXT</button>
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    image: '/img/banner/banner-2.png',
    title: 'LATEST OFFER FOR POPULAR BIKES',
    description: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus.',
    price: 1250,
    discount: 35
  },
  {
    image: '/img/banner/banner-3.png',
    title: 'LATEST OFFER FOR POPULAR BIKES',
    description: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus.',
    price: 1250,
    discount: 35
  }
]

const currentIndex = ref(0)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

function prevSlide() {
  currentIndex.value = currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1
}
</script>

<style scoped>
.latest-product-slider-wrapper {
  position: relative;
}

.single-latest-product {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.single-latest-product.active {
  display: block;
  opacity: 1;
}

.latest-product-img {
  margin-left: 222px;
  margin-right: -175px;
}

.slider-nav {
  margin-left: 205px;
  margin-top: -68px;
}

.slider-nav button {
  background: transparent;
  border: none;
  color: #9b9b9b;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-right: 17px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.slider-nav button:hover {
  color: #ffb52f;
}

.slider-nav button:first-child::before {
  background-color: #9b9b9b;
  content: "";
  height: 2px;
  left: 30px;
  position: absolute;
  top: 12px;
  transform: rotate(-70deg);
  width: 17px;
}

@media (max-width: 991px) {
  .latest-product-img {
    margin-left: 0;
    margin-right: 0;
  }
  .slider-nav {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
