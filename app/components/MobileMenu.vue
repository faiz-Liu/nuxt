<template>
  <nav id="mobile-menu-active">
    <ul class="menu-overflow">
      <li><NuxtLink to="/">HOME</NuxtLink></li>
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
        <a href="#">shop</a>
        <ul>
          <li><NuxtLink to="/shop">grid 3 column</NuxtLink></li>
          <li><NuxtLink to="/product/1">product details</NuxtLink></li>
        </ul>
      </li>
      <li>
        <a href="#">BLOG</a>
        <ul>
          <li><NuxtLink to="/blog">blog page</NuxtLink></li>
          <li><NuxtLink to="/blog/1">blog details</NuxtLink></li>
        </ul>
      </li>
      <li><NuxtLink to="/contact">Contact us</NuxtLink></li>
    </ul>
  </nav>
</template>
