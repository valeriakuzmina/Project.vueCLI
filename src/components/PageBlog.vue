<template>
<div class = "blog-page">
    <MyHeader />
      <banner-blog-page />
      <post-blog-page />
      <card-blog-page />
   <PageFooter />
</div>

   
</template>

<script>
import BannerBlogPage from './BannerBlogPage.vue';
import CardBlogPage from './CardBlogPage.vue';
import PostBlogPage from './PostBlogPage.vue';
export default {
  components: { BannerBlogPage, CardBlogPage, PostBlogPage },
 name: 'PageBlog.vue',
}
</script>


<style scoped>
@import '../assets/style.css';
</style>