<template>
    <nav class="navigation">
    <div class="logo">
      <img class="logo-photo" src="../assets/images/Logo.png" alt="" />
      <p class="logo-text">Interno</p>
    </div>
    <div class="nav-menu">
      <a href="#" class="nav-menu-text">Домой</a>
      <a href="" class="nav-menu-text">Проект</a>
      <a href="" class="nav-menu-text" @click.prevent="$emit('navigate', 'PageBlog')">Блог</a>
    </div>
  </nav>
</template>




<script>
export default {
 name: 'MyHeader.vue'
}
</script>


<style scoped>
@import '../assets/style.css';
</style>