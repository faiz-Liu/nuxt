<template>
  <header>
    <div class="header-area transparent-bar ptb-55" :class="{ stick: isSticky }">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-4">
            <div class="logo-small-device">
              <NuxtLink to="/"><img alt="logo" src="/img/logo/logo.png"></NuxtLink>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-8">
            <div class="header-contact-menu-wrapper pl-45">
              <div class="header-contact">
                <p>WANT TO TALK WITH US +01254 265 987</p>
              </div>
              <div class="menu-wrapper text-center">
                <button class="menu-toggle" :class="{ open: menuOpen }" @click="toggleMenu">
                  <img class="s-open" alt="" src="/img/icon-img/menu.png">
                  <img class="s-close" alt="" src="/img/icon-img/menu-close.png">
                </button>
                <div class="main-menu" :class="{ open: menuOpen }">
                  <nav>
                    <ul>
                      <li><NuxtLink to="/">home</NuxtLink></li>
                      <li><NuxtLink to="/about">about us</NuxtLink></li>
                      <li>
                        <NuxtLink to="/shop">shop</NuxtLink>
                        <ul class="mega-menu">
                          <li>
                            <ul>
                              <li class="mega-menu-title">shop grid</li>
                              <li><NuxtLink to="/shop">grid 3 column</NuxtLink></li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li class="mega-menu-title">shop list</li>
                              <li><NuxtLink to="/shop-list">list 1 column</NuxtLink></li>
                            </ul>
                          </li>
                          <li>
                            <ul>
                              <li class="mega-menu-title">product details</li>
                              <li><NuxtLink to="/product/1">tab style</NuxtLink></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">pages</a>
                        <ul>
                          <li><NuxtLink to="/about">about us</NuxtLink></li>
                          <li><NuxtLink to="/cart">cart page</NuxtLink></li>
                          <li><NuxtLink to="/checkout">checkout</NuxtLink></li>
                          <li><NuxtLink to="/wishlist">wishlist</NuxtLink></li>
                          <li><NuxtLink to="/login">login</NuxtLink></li>
                          <li><NuxtLink to="/contact">contact</NuxtLink></li>
                        </ul>
                      </li>
                      <li>
                        <NuxtLink to="/blog">blog</NuxtLink>
                        <ul>
                          <li><NuxtLink to="/blog">blog page</NuxtLink></li>
                          <li><NuxtLink to="/blog/1">blog details</NuxtLink></li>
                        </ul>
                      </li>
                      <li><NuxtLink to="/contact">contact us</NuxtLink></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="header-cart cart-small-device">
              <ShoppingCart />
            </div>
          </div>
          <div class="mobile-menu-area col-12">
            <div class="mobile-menu">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
      <div class="header-cart-wrapper">
        <ShoppingCart />
      </div>
    </div>
  </header>
</template>

<script setup>
const menuOpen = ref(false)
const isSticky = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isSticky.value = window.scrollY > 200
}
</script>

<style scoped>
.pl-45 {
  padding-left: 45px;
}
</style>
