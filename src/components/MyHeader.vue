<template>
  <nav class="navigation">
    <div class="logo">
      <img class="logo-photo" src="/images/Logo.png" alt="" />
      <p class="logo-text">Interno</p>
    </div>
    <div class="nav-menu">
      <!-- <a href="#" class="nav-menu-text">Домой</a>
      <a href="" class="nav-menu-text">Проект</a>
      <a href="" class="nav-menu-text">Блог</a> -->
      <router-link to="/" class="nav-menu-text">Домой</router-link>
      <router-link to="/project" class="nav-menu-text">Проект</router-link>
      <router-link to="/blog" class="nav-menu-text">Блог</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyHeader.vue",
};
</script>

<style scoped>
@import "../assets/style.css";
</style>
