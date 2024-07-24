<template>
  <div id="app">
    <MyHeader @navigate="currentPage = $event" />
    <component :is="currentPage" />
    <section class="banner-wrapper">
      <div class="banner">
        <div class="banner-content">
          <p class="banner-text">Пусть ваш дом будет уникальным</p>
          <p class="banner-text-description">
            Существует много вариаций Lorem Ipsum, которые можно использовать
          </p>
          <div class="button-content">
            <a href="" class="begin">Начать</a>
            <img src="../src/assets/images/Vector.png" alt="" class="button-img" />
          </div>
        </div>
      </div>
    </section>
    <section class="heading">
      <p class="heading-title">Следите за нашими проектами</p>
      <p class="heading-text">
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </section>

    <div class="wrapper">
      <div class="content-card">
        <img src="../src/assets/images/Image1.png" alt="photo" class="card-img" />
        <div class="wrapper-content-card">
          <div class="wrapper-content-card-text">
            <p class="card-title">Современная кухня</p>
            <p class="card-description">Декор / Планировка</p>
          </div>
          <div class="content-card-button">
            <a href=""
              ><img src="../src/assets/images/next.png" alt="" class="next-button"
            /></a>
          </div>
        </div>
      </div>
      <div class="content-card">
        <img src="../src/assets/images/Image2.png" alt="photo" class="card-img" />
        <div class="wrapper-content-card">
          <div class="wrapper-content-card-text">
            <p class="card-title">Современная кухня</p>
            <p class="card-description">Декор / Планировка</p>
          </div>
          <div class="content-card-button">
            <a href=""
              ><img src="../src/assets/images/next.png" alt="" class="next-button"
            /></a>
          </div>
        </div>
      </div>
      <div class="content-card">
        <img src="../src/assets/images/Image3.png" alt="photo" class="card-img" />
        <div class="wrapper-content-card">
          <div class="wrapper-content-card-text">
            <p class="card-title">Современная кухня</p>
            <p class="card-description">Декор / Планировка</p>
          </div>
          <div class="content-card-button">
            <a href=""
              ><img src="../src/assets/images/next.png" alt="" class="next-button"
            /></a>
          </div>
        </div>
      </div>
      <div class="content-card">
        <img src="../src/assets/images/Image4.png" alt="photo" class="card-img" />
        <div class="wrapper-content-card">
          <div class="wrapper-content-card-text">
            <p class="card-title">Современная кухня</p>
            <p class="card-description">Декор / Планировка</p>
          </div>
          <div class="content-card-button">
            <a href=""
              ><img src="../src/assets/images/next.png" alt="" class="next-button"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <div class="counter-wrapper">
      <div class="counter-card">
        <p class="counter-number">12</p>
        <p class="counter-text">Лет опыта</p>
      </div>
      <div class="counter-card">
        <p class="counter-number">85</p>
        <p class="counter-text">Успешных проектов</p>
      </div>
      <div class="counter-card">
        <p class="counter-number">15</p>
        <p class="counter-text">Проектов в работе</p>
      </div>
      <div class="counter-card">
        <p class="counter-number">95</p>
        <p class="counter-text">Счастливых клиентов</p>
      </div>
    </div>
    <section class="heading">
      <p class="heading-title-2">
        Статьи & <br />
        Новости
      </p>
      <p class="heading-text-2">
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </section>
    <section class="blog-container">
      <div class="blog-card">
        <div class="img-container">
          <p class="img-container-text">Дизайн Кухни</p>
        </div>
        <p class="blog-title">Создадим лучший макет перепланировки</p>
        <div class="blog-description">
          <p class="blog-description-text">26 Декабрь,2022</p>
          <img src="../src/assets/images/next.png" alt="" class="next-button-2" />
        </div>
      </div>
      <div class="blog-card">
        <div class="img-container-2">
          <p class="img-container-text">Дизайн Для Жизни</p>
        </div>
        <p class="blog-title">Лучшие интерьерные идеи по низкой цене</p>
        <div class="blog-description">
          <p class="blog-description-text">26 Декабрь,2022</p>
          <img src="../src/assets/images/next.png" alt="" class="next-button-2" />
        </div>
      </div>
      <div class="blog-card">
        <div class="img-container-3">
          <p class="img-container-text">
            Дизайн <br />
            Интерьера
          </p>
        </div>
        <p class="blog-title">Лучшие интерьерные идеи по низкой цене</p>
        <div class="blog-description">
          <p class="blog-description-text">26 Декабрь,2022</p>
          <img src="../src/assets/images/next.png" alt="" class="next-button-2" />
        </div>
      </div>
    </section>
   <PageFooter />
  
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import PageFooter from './components/PageFooter.vue'
import PageBlog from './components/PageBlog.vue';



export default {
  name: 'App',
  components: {
    MyHeader,
    PageFooter,
    PageBlog,

    
  },
   data() {
    return {
      currentPage: 'App.vue', 
    };
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
