<template>
  <div>
   <div class="blog-banner">
      <img src="/images/blog-banner.png" alt="" class="blog-banner-img" />
      <div class="blog-banner-title">
        <p class="blog-banner-text-project">
          Наш проект
        </p>
        <p class="blog-banner-description">
          Домой / Проект
        </p>
      </div>
    </div>
  </div>
</template>




<script>
export default {
 name: 'BannerProjectPage.vue'
}
</script>


<style scoped>
@import '../assets/style.css';

.blog-banner-text-project{
    padding-top: 41px;
    font-family: "Jost-VariableFont_wght";
    color: rgb(41, 47, 54);
    font-size: 50px;
    font-weight: 400;
  
}
</style>