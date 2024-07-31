<template>
    <footer class="footer-container">
      <div class="footer-content">
        <div class="logo-container">
          <div class="logo">
            <img class="logo-photo" src="/images/Logo.png" alt="" />
            <p class="logo-text">Interno</p>
          </div>
          <div class="twit-in-container">
            <img src="public/images/twit.png" alt="" class="twitter" />
            <img src="public/images/in.png" alt="" class="in" />
          </div>
        </div>
      </div>
      <div class="fotter-content">
        <p class="footer-content-title">Страницы</p>
        <p class="footer-content-text">Домой</p>
        <p class="footer-content-text">Проект</p>
        <p class="footer-content-text">Блог</p>
      </div>
      <div class="footer-content">
        <p class="footer-content-title">Контакты</p>
        <p class="footer-content-text">
          55 East Birchwood Ave. <br />
          Brooklyn, New York 11201
        </p>
        <p class="footer-content-text">contact@interno.com</p>
        <p class="footer-content-text">(123) 456 - 7890</p>
      </div>
    </footer>
</template>

<script>
export default {
 name: 'PageFooter.vue'
}
</script>


<style scoped>
@import '../assets/style.css';
</style>