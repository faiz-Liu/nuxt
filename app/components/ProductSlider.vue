<template>
  <div class="product-slider-wrapper">
    <div class="product-slider-container" ref="sliderContainer">
      <div
        class="product-slider-track"
        :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
      >
        <div
          v-for="(bundle, index) in productBundles"
          :key="index"
          class="product-wrapper-bundle"
        >
          <ProductCard
            v-for="product in bundle"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
    <div class="slider-nav">
      <button class="nav-btn prev" @click="prevSlide">PRE</button>
      <button class="nav-btn next" @click="nextSlide">NEXT</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const slideWidth = ref(0)
const sliderContainer = ref(null)

const productBundles = computed(() => {
  const bundles = []
  for (let i = 0; i < props.products.length; i += 2) {
    bundles.push(props.products.slice(i, i + 2))
  }
  return bundles
})

const maxIndex = computed(() => Math.max(0, productBundles.value.length - 3))

function nextSlide() {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex.value
  }
}

onMounted(() => {
  updateSlideWidth()
  window.addEventListener('resize', updateSlideWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlideWidth)
})

function updateSlideWidth() {
  if (sliderContainer.value) {
    slideWidth.value = sliderContainer.value.offsetWidth / 3
  }
}
</script>

<style scoped>
.product-slider-wrapper {
  position: relative;
  overflow: hidden;
}

.product-slider-container {
  overflow: hidden;
}

.product-slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.product-wrapper-bundle {
  flex: 0 0 33.333%;
  padding: 0 10px;
}

.slider-nav {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.nav-btn {
  background: transparent;
  border: none;
  color: #9b9b9b;
  font-weight: bold;
  font-size: 18px;
  font-family: "Oswald", sans-serif;
  cursor: pointer;
  margin-left: 17px;
  position: relative;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  color: #ffb52f;
}

.nav-btn.prev::before {
  background-color: #9b9b9b;
  content: "";
  height: 2px;
  left: 30px;
  position: absolute;
  top: 12px;
  transform: rotate(-70deg);
  width: 17px;
}
</style>
