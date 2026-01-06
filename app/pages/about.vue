<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area pt-255 pb-170" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container-fluid">
        <div class="breadcrumb-content text-center">
          <h2>About Us</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- About Us Area -->
    <div class="about-us-area pt-125 pb-125">
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

    <!-- Services Area -->
    <div class="services-area pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6" v-for="service in services" :key="service.id">
            <div class="single-services mb-30 text-center" :class="service.color">
              <div class="services-icon">
                <img :src="service.icon" alt="">
              </div>
              <div class="services-text">
                <h5>{{ service.title }}</h5>
                <p>{{ service.description }}</p>
              </div>
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

    <!-- Team Area -->
    <div class="team-area pt-120 pb-95">
      <div class="container">
        <div class="section-title text-center mb-60">
          <h2>Team Member</h2>
          <p><span>OSWAN</span> the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle</p>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12" v-for="member in teamMembers" :key="member.id">
            <div class="team-wrapper mb-30">
              <div class="team-img">
                <img :src="member.image" alt="">
              </div>
              <div class="team-content">
                <h4>{{ member.name }}</h4>
                <span>{{ member.position }}</span>
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
const email = ref('')

const services = [
  { id: 1, title: 'FREE SHIPPING', description: 'Free shipping on all order', icon: '/img/icon-img/3.png', color: 'orange' },
  { id: 2, title: 'ONLINE SUPPORT', description: 'Online support 24 hours a day', icon: '/img/icon-img/4.png', color: 'yellow' },
  { id: 3, title: 'MONEY RETURN', description: 'Back guarantee under 5 days', icon: '/img/icon-img/5.png', color: 'purple' },
  { id: 4, title: 'MEMBER DISCOUNT', description: 'On every order over $150', icon: '/img/icon-img/6.png', color: 'sky' }
]

const teamMembers = [
  { id: 1, name: 'Zoe Jones', position: 'Founder', image: '/img/team/1.jpg' },
  { id: 2, name: 'Sienna Nguyen', position: 'Manager', image: '/img/team/2.jpg' },
  { id: 3, name: 'Liam Ryan', position: 'Director', image: '/img/team/3.jpg' },
  { id: 4, name: 'Charlotte Taylor', position: 'Chairmen', image: '/img/team/4.jpg' }
]

function subscribeNewsletter() {
  console.log('Subscribed:', email.value)
  email.value = ''
}
</script>

<style scoped>
.pt-255 {
  padding-top: 255px;
}
.pb-170 {
  padding-bottom: 170px;
}
.pt-125 {
  padding-top: 125px;
}
.pb-125 {
  padding-bottom: 125px;
}
.pt-120 {
  padding-top: 120px;
}
.pb-95 {
  padding-bottom: 95px;
}
.pb-100 {
  padding-bottom: 100px;
}
.mb-60 {
  margin-bottom: 60px;
}
.mb-30 {
  margin-bottom: 30px;
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
  .pt-255 {
    padding-top: 170px;
  }
  .pb-170 {
    padding-bottom: 75px;
  }
  .pt-125 {
    padding-top: 75px;
  }
  .pb-125 {
    padding-bottom: 75px;
  }
  .pt-120 {
    padding-top: 70px;
  }
  .pb-95 {
    padding-bottom: 45px;
  }
  .pb-100 {
    padding-bottom: 50px;
  }
  .breadcrumb-content h2 {
    font-size: 25px;
    letter-spacing: 0;
  }
  .overview-content {
    margin: 0;
    padding: 0;
  }
  .overview-content h1 {
    font-size: 33px;
  }
  .overview-content h2 {
    font-size: 24px;
    line-height: 40px;
  }
  .overview-img {
    margin-top: 40px;
  }
  .single-services {
    display: block;
  }
  .services-icon {
    margin-bottom: 15px;
    margin-right: 0;
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
  .overview-content {
    margin-top: 0;
    padding: 0;
  }
  .overview-img {
    margin-top: 50px;
  }
  .single-services {
    display: block;
  }
  .services-icon {
    margin-bottom: 15px;
    margin-right: 0;
  }
}
</style>
