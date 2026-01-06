<template>
  <div class="mean-container">
    <div class="mean-bar">
      <a href="#" class="meanmenu-reveal" :class="{ meanclose: menuOpen }" @click.prevent="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <nav class="mean-nav" v-show="menuOpen">
        <ul class="menu-overflow">
          <li>
            <NuxtLink to="/" @click="closeMenu">HOME</NuxtLink>
          </li>
          <li>
            <a href="#" @click.prevent="toggleSubmenu('pages')">PAGES</a>
            <a href="#" class="mean-expand" :class="{ 'mean-clicked': openSubmenus.pages }" @click.prevent="toggleSubmenu('pages')">
              {{ openSubmenus.pages ? '-' : '+' }}
            </a>
            <ul v-show="openSubmenus.pages">
              <li><NuxtLink to="/about" @click="closeMenu">about us</NuxtLink></li>
              <li><NuxtLink to="/cart" @click="closeMenu">cart page</NuxtLink></li>
              <li><NuxtLink to="/checkout" @click="closeMenu">checkout</NuxtLink></li>
              <li><NuxtLink to="/wishlist" @click="closeMenu">wishlist</NuxtLink></li>
              <li><NuxtLink to="/login" @click="closeMenu">login</NuxtLink></li>
              <li><NuxtLink to="/contact" @click="closeMenu">contact</NuxtLink></li>
            </ul>
          </li>
          <li>
            <a href="#" @click.prevent="toggleSubmenu('shop')">SHOP</a>
            <a href="#" class="mean-expand" :class="{ 'mean-clicked': openSubmenus.shop }" @click.prevent="toggleSubmenu('shop')">
              {{ openSubmenus.shop ? '-' : '+' }}
            </a>
            <ul v-show="openSubmenus.shop">
              <li><NuxtLink to="/shop" @click="closeMenu">grid 3 column</NuxtLink></li>
              <li><NuxtLink to="/shop-list" @click="closeMenu">list view</NuxtLink></li>
              <li><NuxtLink to="/product/1" @click="closeMenu">product details</NuxtLink></li>
            </ul>
          </li>
          <li>
            <a href="#" @click.prevent="toggleSubmenu('blog')">BLOG</a>
            <a href="#" class="mean-expand" :class="{ 'mean-clicked': openSubmenus.blog }" @click.prevent="toggleSubmenu('blog')">
              {{ openSubmenus.blog ? '-' : '+' }}
            </a>
            <ul v-show="openSubmenus.blog">
              <li><NuxtLink to="/blog" @click="closeMenu">blog page</NuxtLink></li>
              <li><NuxtLink to="/blog/1" @click="closeMenu">blog details</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/contact" @click="closeMenu">CONTACT US</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
const menuOpen = ref(false)
const openSubmenus = ref({
  pages: false,
  shop: false,
  blog: false
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) {
    openSubmenus.value = { pages: false, shop: false, blog: false }
  }
}

function closeMenu() {
  menuOpen.value = false
  openSubmenus.value = { pages: false, shop: false, blog: false }
}

function toggleSubmenu(name) {
  openSubmenus.value[name] = !openSubmenus.value[name]
}
</script>

<style scoped>
.mean-container {
  position: relative;
}

.mean-bar {
  background: transparent;
  min-height: 0;
  position: relative;
  width: 100%;
  z-index: 999;
}

.meanmenu-reveal {
  color: #333;
  cursor: pointer;
  display: block;
  font-size: 1px;
  font-weight: 700;
  height: 22px;
  line-height: 22px;
  padding: 6px 9px 3px;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: -36px;
  border: 1px solid #666;
}

.meanmenu-reveal span {
  display: block;
  background: #333;
  height: 2px;
  margin-top: 3px;
  width: 18px;
}

.meanmenu-reveal span:first-child {
  margin-top: 0;
}

.meanmenu-reveal.meanclose span:nth-child(1) {
  transform: rotate(45deg) translate(3px, 3px);
}

.meanmenu-reveal.meanclose span:nth-child(2) {
  opacity: 0;
}

.meanmenu-reveal.meanclose span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

.mean-nav {
  float: left;
  width: 100%;
  background: transparent;
  margin-top: 5px;
}

.mean-nav ul {
  padding: 0;
  margin: 0;
  width: 100%;
  list-style-type: none;
}

.mean-nav ul li {
  background: #f8f8f8;
  float: left;
  position: relative;
  width: 100%;
  border-top: 1px solid #ddd;
}

.mean-nav ul li a {
  background: #f8f8f8;
  color: #666666;
  display: block;
  float: left;
  font-size: 12px;
  margin: 0;
  padding: 1em 5%;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  width: 90%;
  font-weight: bold;
}

.mean-nav ul li li a {
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  opacity: 0.75;
  padding: 1em 10%;
  width: 80%;
  font-weight: normal;
  text-transform: capitalize;
  color: #444;
}

.mean-nav ul li a:hover {
  background: #f8f8f8;
  color: #ffb52f;
}

.mean-expand {
  width: 26px;
  height: 15px;
  margin-top: 1px;
  padding: 6px 12px !important;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  font-weight: 700;
  background: #F8F8F8;
  border: 0 !important;
  font-size: 14px;
  line-height: 15px;
}

.mean-expand:hover {
  background: #f8f8f8;
}

.menu-overflow {
  max-height: 300px;
  overflow-y: auto;
}
</style>
