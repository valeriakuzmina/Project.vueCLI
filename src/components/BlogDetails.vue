<template>
  <div>
<MyHeader/>
   <div class="blog-banner">
          <img src="./images/banner-blogdetails.png" alt="" class="blog-banner-img" />
        <div class="blog-details-wrapper">  
<CardComponent/>
   <div class="blog-details-tegs">
            <p class="blog-details-teg-title">Тэги</p>
            <div class="blog-details-teg-name">
                <button @click="filterCards('kitchen')" class="teg kitchen">Кухня</button>
                <button  @click="filterCards('bedroom')" class="teg bedroom">Спальня</button>
                <button  @click="filterCards('building')" class="teg building">Здания</button>
                <button  @click="filterCards('architecture')" class="teg architecture">Архитектура</button>
                <button  @click="filterCards('layout')" class="teg layout">Планировка</button>
                <button  @click="filterCards('bedroom')" class="teg bedroom">Спальня</button>
            </div>
          </div>
        </div>
<PageFooter/>
  </div>
</template>

import MyHeader from './components/MyHeader.vue'
import PageFooter from './components/PageFooter.vue'
import CardComponent from './components/CardComponent.vue'
import PageBlog from './components/PageBlog.vue'


<script>
export default {
 name: 'BlogDetails.vue',
 data () {
 return{
    
 }
 }
}
</script>


<style scoped>
@import '../assets/style.css';
</style>