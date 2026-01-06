<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>BLOG</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Blog Area -->
    <div class="blog-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6" v-for="post in blogPosts" :key="post.id">
            <div class="blog-hm-wrapper mb-40">
              <div class="blog-img">
                <NuxtLink :to="`/blog/${post.id}`"><img :src="post.image" alt="image"></NuxtLink>
                <div class="blog-date">
                  <h4>{{ post.date }}</h4>
                </div>
                <div class="blog-hm-social">
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="blog-hm-content">
                <h3><NuxtLink :to="`/blog/${post.id}`">{{ post.title }}</NuxtLink></h3>
                <p><span>OSWAN</span> {{ post.excerpt }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination-style text-center mt-30">
          <ul>
            <li><a href="#" class="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
  { id: 1, title: 'Sports Motorbike for play in desert', date: '24 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-1.jpg' },
  { id: 2, title: 'Motorbike Racing at October', date: '22 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-2.jpg' },
  { id: 3, title: 'Latest Motorbike Release this Year', date: '20 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-3.jpg' },
  { id: 4, title: 'Best Motorcycle Accessories 2018', date: '18 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-1.jpg' },
  { id: 5, title: 'How to Maintain Your Bike', date: '16 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-2.jpg' },
  { id: 6, title: 'Top 10 Bikes of the Year', date: '14 February, 2018', excerpt: 'the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle it quo', image: '/img/blog/blog-hm-3.jpg' }
]
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
.mb-40 {
  margin-bottom: 40px;
}
.mt-30 {
  margin-top: 30px;
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
}
</style>
