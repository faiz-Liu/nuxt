<template>
  <div>
    <!-- Breadcrumb Area -->
    <div class="breadcrumb-area bg-img pt-200 pb-200" style="background-image: url(/img/banner/banner-4.jpg)">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <h2>BLOG DETAILS</h2>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li>Blog Details</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Blog Details Area -->
    <div class="blog-details-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-details-wrapper">
              <div class="blog-img mb-30">
                <img :src="post.image" alt="blog">
              </div>
              <h2>{{ post.title }}</h2>
              <div class="blog-meta mb-20">
                <span><i class="fa fa-calendar"></i> {{ post.date }}</span>
                <span><i class="fa fa-user"></i> {{ post.author }}</span>
                <span><i class="fa fa-comments"></i> {{ post.comments }} Comments</span>
              </div>
              <p v-for="(paragraph, index) in post.content" :key="index">{{ paragraph }}</p>
              <blockquote v-if="post.quote">
                <p>{{ post.quote }}</p>
              </blockquote>
              <div class="blog-dec-tags-social mt-40">
                <div class="blog-dec-tags">
                  <span>Tags:</span>
                  <ul>
                    <li v-for="tag in post.tags" :key="tag"><a href="#">{{ tag }}</a></li>
                  </ul>
                </div>
                <div class="blog-dec-social">
                  <span>Share:</span>
                  <ul>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="dec-next-previous-btn">
                <NuxtLink to="/blog">Previous Post</NuxtLink>
                <NuxtLink to="/blog">Next Post</NuxtLink>
              </div>

              <!-- Comments -->
              <div class="blog-comment-wrapper mt-60">
                <h3 class="blog-dec-title mb-30">Comments ({{ comments.length }})</h3>
                <div v-for="comment in comments" :key="comment.id" class="single-comment mb-30">
                  <div class="blog-comment-img">
                    <img :src="comment.avatar" alt="">
                  </div>
                  <div class="blog-comment-content">
                    <h4>{{ comment.name }}</h4>
                    <span>{{ comment.date }}</span>
                    <p>{{ comment.text }}</p>
                    <div class="blog-details-btn">
                      <a href="#">Reply</a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comment Form -->
              <div class="blog-reply-wrapper mt-60">
                <h3 class="blog-dec-title">Leave a Comment</h3>
                <form @submit.prevent="submitComment">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="leave-form">
                        <input type="text" v-model="newComment.name" placeholder="Name*" required>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="leave-form">
                        <input type="email" v-model="newComment.email" placeholder="Email*" required>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="leave-form">
                        <textarea v-model="newComment.text" placeholder="Your Comment*" required></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="text-leave">
                        <button type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="sidebar-wrapper">
              <div class="sidebar-search mb-40">
                <form>
                  <input type="text" placeholder="Search...">
                  <button type="submit"><i class="icofont icofont-search-1"></i></button>
                </form>
              </div>
              <div class="sidebar-widget mb-40">
                <h3 class="sidebar-widget-title">Recent Posts</h3>
                <div class="recent-posts">
                  <div v-for="recent in recentPosts" :key="recent.id" class="single-recent-post mb-20">
                    <div class="recent-post-img">
                      <NuxtLink :to="`/blog/${recent.id}`"><img :src="recent.image" alt=""></NuxtLink>
                    </div>
                    <div class="recent-post-content">
                      <h4><NuxtLink :to="`/blog/${recent.id}`">{{ recent.title }}</NuxtLink></h4>
                      <span>{{ recent.date }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget mb-40">
                <h3 class="sidebar-widget-title">Categories</h3>
                <ul class="sidebar-categories">
                  <li><a href="#">Motorcycles (12)</a></li>
                  <li><a href="#">Accessories (8)</a></li>
                  <li><a href="#">Racing (5)</a></li>
                  <li><a href="#">Maintenance (10)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const postId = route.params.id

const post = {
  id: postId,
  title: 'Sports Motorbike for play in desert',
  date: '24 February, 2018',
  author: 'Admin',
  comments: 5,
  image: '/img/blog/blog-hm-1.jpg',
  content: [
    'OSWAN the most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ],
  quote: 'The best motorcycle is the one that makes you smile every time you ride it.',
  tags: ['Motorcycle', 'Sport', 'Desert']
}

const comments = ref([
  { id: 1, name: 'John Doe', date: '25 February, 2018', text: 'Great article! Very informative.', avatar: '/img/team/1.jpg' },
  { id: 2, name: 'Jane Smith', date: '26 February, 2018', text: 'I love desert riding. Thanks for sharing!', avatar: '/img/team/2.jpg' }
])

const recentPosts = [
  { id: 1, title: 'Sports Motorbike for play in desert', date: '24 Feb, 2018', image: '/img/blog/blog-hm-1.jpg' },
  { id: 2, title: 'Motorbike Racing at October', date: '22 Feb, 2018', image: '/img/blog/blog-hm-2.jpg' },
  { id: 3, title: 'Latest Motorbike Release', date: '20 Feb, 2018', image: '/img/blog/blog-hm-3.jpg' }
]

const newComment = ref({
  name: '',
  email: '',
  text: ''
})

function submitComment() {
  console.log('Comment submitted:', newComment.value)
  newComment.value = { name: '', email: '', text: '' }
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
.mb-20 {
  margin-bottom: 20px;
}
.mb-30 {
  margin-bottom: 30px;
}
.mb-40 {
  margin-bottom: 40px;
}
.mt-40 {
  margin-top: 40px;
}
.mt-60 {
  margin-top: 60px;
}

.blog-img img {
  width: 100%;
}

.blog-meta span {
  margin-right: 20px;
  color: #666;
}

.blog-meta i {
  margin-right: 5px;
}

.single-comment {
  display: flex;
  gap: 20px;
}

.blog-comment-img img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.sidebar-search {
  position: relative;
}

.sidebar-search input {
  width: 100%;
  height: 45px;
  padding: 0 50px 0 15px;
  border: 1px solid #ddd;
}

.sidebar-search button {
  position: absolute;
  right: 0;
  top: 0;
  height: 45px;
  width: 45px;
  background: #ffb52f;
  border: none;
  cursor: pointer;
}

.sidebar-widget-title {
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.single-recent-post {
  display: flex;
  gap: 15px;
}

.recent-post-img img {
  width: 80px;
}

.sidebar-categories li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.sidebar-categories li a {
  color: #666;
}

.sidebar-categories li a:hover {
  color: #ffb52f;
}
</style>
