<template>
  <div id="app">
    <MyHeader />
    <!-- <home-page /> -->
    <router-view />
    <PageFooter />
  


  <!-- <project-page /> -->
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import PageFooter from './components/PageFooter.vue'
// import HomePage from './components/HomePage.vue'
// import PageBlog from './components/PageBlog.vue';
// import BannerBlogPage from './components/BannerBlogPage.vue';
// import BannerMainPage from './components/BannerMainPage.vue';
// import CardMainPage from './components/CardMainPage.vue';
// import ProjectPage from './components/ProjectPage.vue';



export default {
  name: 'App',
  components: {
    MyHeader,
    PageFooter,
    // PageBlog,
    // BannerBlogPage,
    // BannerMainPage,
    // CardMainPage,
    // ProjectPage,
    // HomePage

    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import '../src/assets/style.css';
</style>
