<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>LOGIN / REGISTER</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Login Register Area -->
    <div class="login-register-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 mx-auto">
            <div class="login-register-wrapper">
              <div class="login-register-tab-list nav" role="tablist">
                <a
                  :class="{ active: activeTab === 'login' }"
                  href="#"
                  @click.prevent="activeTab = 'login'"
                >
                  <h4>Login</h4>
                </a>
                <a
                  :class="{ active: activeTab === 'register' }"
                  href="#"
                  @click.prevent="activeTab = 'register'"
                >
                  <h4>Register</h4>
                </a>
              </div>
              <div class="tab-content">
                <!-- Login Form -->
                <div class="tab-pane" :class="{ active: activeTab === 'login' }">
                  <div class="login-form-container">
                    <div class="login-text">
                      <h2>Login</h2>
                      <span>Login to your account</span>
                    </div>
                    <form @submit.prevent="handleLogin">
                      <input type="email" v-model="loginForm.email" placeholder="Email" required>
                      <input type="password" v-model="loginForm.password" placeholder="Password" required>
                      <div class="login-toggle-btn">
                        <input type="checkbox" v-model="loginForm.remember" id="remember">
                        <label for="remember">Remember me</label>
                        <a href="#">Forgot Password?</a>
                      </div>
                      <button type="submit" class="btn-style">Login</button>
                    </form>
                  </div>
                </div>

                <!-- Register Form -->
                <div class="tab-pane" :class="{ active: activeTab === 'register' }">
                  <div class="login-form-container">
                    <div class="login-text">
                      <h2>Register</h2>
                      <span>Create a new account</span>
                    </div>
                    <form @submit.prevent="handleRegister">
                      <input type="text" v-model="registerForm.name" placeholder="Full Name" required>
                      <input type="email" v-model="registerForm.email" placeholder="Email" required>
                      <input type="password" v-model="registerForm.password" placeholder="Password" required>
                      <input type="password" v-model="registerForm.confirmPassword" placeholder="Confirm Password" required>
                      <button type="submit" class="btn-style">Register</button>
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
const activeTab = ref('login')

const loginForm = ref({
  email: '',
  password: '',
  remember: false
})

const registerForm = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

function handleLogin() {
  console.log('Login:', loginForm.value)
}

function handleRegister() {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    alert('Passwords do not match')
    return
  }
  console.log('Register:', registerForm.value)
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

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
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
  .login-form-container {
    padding: 40px 12px;
  }
  .login-form-container label {
    font-size: 14px;
  }
}
</style>
