<template>
  <div>
   <div class="blog-banner">
          <img src="/images/banner-blogdetails.png" alt="" class="blog-banner-img" />
        <div class="blog-details-wrapper">  
    <CardComponent />
          </div>
        </div>
  </div>
</template>



<script>

import CardComponent from '@/components/CardComponent.vue'

export default {
 name: 'BlogDetails.vue',
 components: {CardComponent},
 data () {
 return{
    
 }
 },
  mounted() {
    window.scrollTo(0, 0); // Прокрутить страницу вверх
  },
}
</script>


<style scoped>
@import '../assets/style.css';
</style>