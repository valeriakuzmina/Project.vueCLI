<template>
<div class = "blog-page">
      <banner-blog-page />
      <post-blog-page />
      <card-blog-page />
</div>

   
</template>

<script>
import BannerBlogPage from './BannerBlogPage.vue';
import CardBlogPage from './CardBlogPage.vue';
import PostBlogPage from './PostBlogPage.vue';
export default {
  components: { BannerBlogPage, CardBlogPage, PostBlogPage },
 name: 'PageBlog.vue',
  mounted() {
    window.scrollTo(0, 0); 
  },
}

</script>


<style scoped>
@import '../assets/style.css';
</style>