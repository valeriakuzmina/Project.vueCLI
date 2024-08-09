<template>
    <div>
        <banner-main-page />

    <section class="heading">
      <p class="heading-title">Следите за нашими проектами</p>
      <p class="heading-text">
        Хорошо известно, что читатель будет отвлекаться <br />
        на читабельный контент страницы
      </p>
    </section>

   <card-main-page />

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
          <router-link to="/blogdetails"><img src="/images/next.png" alt="" class="next-button-2" /></router-link>
        </div>
      </div>
      <div class="blog-card">
        <div class="img-container-2">
          <p class="img-container-text">Дизайн Для Жизни</p>
        </div>
        <p class="blog-title">Лучшие интерьерные идеи по низкой цене</p>
        <div class="blog-description">
          <p class="blog-description-text">26 Декабрь,2022</p>
          <router-link to="/blogdetails"><img src="/images/next.png" alt="" class="next-button-2" /></router-link>
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
          <router-link to="/blogdetails"><img src="/images/next.png" alt="" class="next-button-2" /></router-link>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
import BannerMainPage from '../components/BannerMainPage.vue';
import CardMainPage from '../components/CardMainPage.vue';

export default {
    name: "HomePage.vue",
    components : {
        BannerMainPage,
        CardMainPage
    },
    mounted() {
    window.scrollTo(0, 0); 
    }
}
</script>