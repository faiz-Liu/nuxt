<template>
  <div class="slider-area">
    <div class="slider-active-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="single-slider slider-1"
        :class="{ active: currentSlide === index }"
        :style="{ backgroundImage: `url(${slide.bg})` }"
      >
        <div class="container">
          <div class="slider-content slider-animated-1" :class="{ 'animate-active': currentSlide === index }">
            <div class="slider-img text-center">
              <img class="animated" :src="slide.image" alt="slider images">
            </div>
            <div class="slider-text-img">
              <h6 class="animated">{{ slide.subtitle }}</h6>
              <img class="animated" src="/img/icon-img/bike.png" alt="slider images">
            </div>
            <h2 class="animated">{{ slide.title }}</h2>
          </div>
        </div>
      </div>
      <div class="slider-dots">
        <span
          v-for="(slide, index) in slides"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
    <div class="slider-social">
      <ul>
        <li class="facebook"><a href="#"><i class="icofont icofont-social-facebook"></i></a></li>
        <li class="twitter"><a href="#"><i class="icofont icofont-social-twitter"></i></a></li>
        <li class="pinterest"><a href="#"><i class="icofont icofont-social-pinterest"></i></a></li>
      </ul>
    </div>
    <div class="language-currency-wrapper">
      <div class="language-currency">
        <div class="language">
          <div class="custom-select" :class="{ open: languageOpen }">
            <div class="select-selected" @click="languageOpen = !languageOpen">
              {{ selectedLanguage }}
            </div>
            <ul class="select-items" v-show="languageOpen">
              <li v-for="lang in languages" :key="lang" @click="selectLanguage(lang)">{{ lang }}</li>
            </ul>
          </div>
        </div>
        <div class="currency">
          <div class="custom-select" :class="{ open: currencyOpen }">
            <div class="select-selected" @click="currencyOpen = !currencyOpen">
              {{ selectedCurrency }}
            </div>
            <ul class="select-items" v-show="currencyOpen">
              <li v-for="curr in currencies" :key="curr" @click="selectCurrency(curr)">{{ curr }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    bg: '/img/slider/slider-bg.jpg',
    image: '/img/slider/bike-1.png',
    title: 'MOTORCYCLE',
    subtitle: 'BOOK YOUR BIKE INSTANTLY AND ENJOY DISCOUNT'
  },
  {
    bg: '/img/slider/slider-bg.jpg',
    image: '/img/slider/bike-2.png',
    title: 'MOTORCYCLE',
    subtitle: 'BOOK YOUR BIKE INSTANTLY AND ENJOY DISCOUNT'
  },
  {
    bg: '/img/slider/slider-bg.jpg',
    image: '/img/slider/bike-1.png',
    title: 'MOTORCYCLE',
    subtitle: 'BOOK YOUR BIKE INSTANTLY AND ENJOY DISCOUNT'
  }
]

const currentSlide = ref(0)
let slideInterval = null

// Language & Currency
const languages = ['ENG', 'BANGLA', 'HINDI']
const currencies = ['$USD', 'US', 'EURO']
const selectedLanguage = ref('ENG')
const selectedCurrency = ref('$USD')
const languageOpen = ref(false)
const currencyOpen = ref(false)

function selectLanguage(lang) {
  selectedLanguage.value = lang
  languageOpen.value = false
}

function selectCurrency(curr) {
  selectedCurrency.value = curr
  currencyOpen.value = false
}

function goToSlide(index) {
  currentSlide.value = index
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
  document.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
  document.removeEventListener('click', closeDropdowns)
})

function closeDropdowns(e) {
  if (!e.target.closest('.custom-select')) {
    languageOpen.value = false
    currencyOpen.value = false
  }
}
</script>

<style scoped>
.slider-active-wrapper {
  position: relative;
  overflow: hidden;
}

.single-slider {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.single-slider.active {
  display: block;
  opacity: 1;
}

.slider-dots {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 19px;
  z-index: 10;
}

.slider-dots .dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #898989;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-dots .dot.active {
  background: #2f2f2f;
  border-color: #2f2f2f;
}

.animate-active .animated {
  animation-duration: 1.3s;
  animation-fill-mode: both;
}

.animate-active .slider-img .animated {
  animation-delay: 1s;
  animation-name: fadeInLeft;
}

.animate-active .slider-text-img h6 {
  animation-delay: 1.8s;
  animation-name: fadeInLeft;
}

.animate-active .slider-text-img img {
  animation-delay: 1.5s;
  animation-name: fadeInLeft;
}

.animate-active h2.animated {
  animation-delay: 1.4s;
  animation-name: fadeInLeft;
}

/* Custom Select Dropdown */
.custom-select {
  position: relative;
  display: inline-block;
}

.select-selected {
  color: #2f2f2f;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  padding-right: 18px;
  position: relative;
}

.select-selected::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #2f2f2f;
  transition: transform 0.3s ease;
}

.custom-select.open .select-selected::after {
  transform: translateY(-50%) rotate(180deg);
}

.select-selected:hover {
  color: #000;
}

.select-items {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 120px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  margin-top: 15px;
  padding: 10px 0;
}

.select-items li {
  padding: 8px 15px;
  color: #444;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-items li:hover {
  background: #f5f5f5;
  color: #ffb52f;
}
</style>
