<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>CONTACT US</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Contact Area -->
    <div class="contact-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="contact-form">
              <h3 class="contact-title">GET IN TOUCH</h3>
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="contact-form-style mb-30">
                      <input type="text" v-model="form.name" placeholder="Name*" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="contact-form-style mb-30">
                      <input type="email" v-model="form.email" placeholder="Email*" required>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="contact-form-style mb-30">
                      <input type="text" v-model="form.subject" placeholder="Subject">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="contact-form-style">
                      <textarea v-model="form.message" placeholder="Message*" required></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" class="btn-style">Send Message</button>
                  </div>
                </div>
              </form>
              <p v-if="formMessage" class="contact-message">{{ formMessage }}</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="communication-info">
              <div class="single-communication">
                <div class="communication-icon">
                  <i class="icofont icofont-location-pin"></i>
                </div>
                <div class="communication-text">
                  <h4>Address</h4>
                  <p>276 Jhilli Nogor, 4th floor, Momen Tower, Main Town, New York</p>
                </div>
              </div>
              <div class="single-communication">
                <div class="communication-icon">
                  <i class="icofont icofont-phone"></i>
                </div>
                <div class="communication-text">
                  <h4>Phone</h4>
                  <p><a href="tel:+09012568369987">+090 12568 369 987</a></p>
                  <p><a href="tel:+09012568369988">+090 12568 369 988</a></p>
                </div>
              </div>
              <div class="single-communication">
                <div class="communication-icon">
                  <i class="icofont icofont-email"></i>
                </div>
                <div class="communication-text">
                  <h4>Email</h4>
                  <p><a href="mailto:info@example.com">info@example.com</a></p>
                  <p><a href="mailto:support@example.com">support@example.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Map Area -->
    <div class="map-area">
      <div id="map" style="height: 500px; background: #f1f1f1; display: flex; align-items: center; justify-content: center;">
        <p>Map placeholder - Integrate Google Maps here</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formMessage = ref('')

function submitForm() {
  console.log('Form submitted:', form.value)
  formMessage.value = 'Thank you for your message. We will get back to you soon!'
  form.value = { name: '', email: '', subject: '', message: '' }
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
.mb-30 {
  margin-bottom: 30px;
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
  .communication-info {
    margin-right: 0;
    padding: 54px 15px;
  }
  .contact-message-wrapper {
    margin-top: 50px;
  }
}
</style>
