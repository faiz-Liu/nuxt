<template>
  <div class="testimonial-slider-wrapper">
    <div
      v-for="(testimonial, index) in testimonials"
      :key="index"
      class="single-testimonial"
      :class="{ active: currentIndex === index }"
    >
      <div class="row">
        <div class="col-lg-5 col-md-12 col-12">
          <div class="testimonial-img pl-75">
            <img :alt="testimonial.name" :src="testimonial.image">
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-12">
          <div class="testimonial-content">
            <div class="testimonial-dec">
              <p><span>OSWAN</span> {{ testimonial.text }}</p>
            </div>
            <div class="name-designation">
              <h4>{{ testimonial.name }}</h4>
              <span>{{ testimonial.position }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="testimonial-nav">
      <button @click="prevSlide">PRE</button>
      <button @click="nextSlide">NEXT</button>
    </div>
  </div>
</template>

<script setup>
const testimonials = [
  {
    image: '/img/team/testimonial-1.jpg',
    text: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam quoten',
    name: 'Rayed Ayash Hisham',
    position: 'COO, ASEKHA'
  },
  {
    image: '/img/team/testimonial-2.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat.',
    name: 'James Momen Nirob',
    position: 'CEO, ASEKHA'
  }
]

const currentIndex = ref(0)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prevSlide() {
  currentIndex.value = currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}
</script>

<style scoped>
.testimonial-slider-wrapper {
  position: relative;
}

.single-testimonial {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.single-testimonial.active {
  display: block;
  opacity: 1;
}

.pl-75 {
  padding-left: 75px;
}

.testimonial-nav {
  position: absolute;
  bottom: 100px;
  left: -42px;
  transform: rotate(-90deg);
}

.testimonial-nav button {
  background: transparent;
  border: none;
  color: #9b9b9b;
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin-right: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-nav button:hover {
  color: #ffb52f;
}
</style>
