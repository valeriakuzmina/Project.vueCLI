<template>
  <div>
    <section class="news-wrapper">
      <p class="news-wrapper-title">Статьи & Новости</p>
      <div class="blog-card-container-page-blog">
        <div class="blog-card" v-for="card in cards" :key="card.id">
          <div class="img-container-3">
            <img :src="card.src" alt="" class="blog-card-img" />
          </div>
          <p class="blog-title">{{ card.title }}</p>
          <div class="blog-description">
            <p class="blog-description-text">{{ card.date }}</p>
            <router-link to="/blogdetails"><img src="/images/next.png" alt="" class="next-button-2"
            /></router-link>
          </div>
        </div>
      </div>
      <div class="news-buttons">
        <div class="news-button-container">
          <a href=""><p class="news-button-number">01</p></a>
        </div>
        <div class="news-button-container">
          <a href=""><p class="news-button-number">02</p></a>
        </div>
        <div class="news-button-container">
          <a href=""><p class="news-button-number">03</p></a>
        </div>
        <div class="news-button-container">
          <a href=""
            ><img
              src="/images/next-blog.png"
              alt="photo"
              class="news-button-next"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CardBlogPage.vue",
  data() {
    return {
      cards: [
        {
          id: 1,
          src: "/images/Image8.png",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "26 Декабрь,2022",
        },
        {
          id: 2,
          src: "/images/Image9.png",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "26 Декабрь,2022",
        },
        {
          id: 3,
          src: "/images/Image10.png",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "26 Декабрь,2022",
        },
        {
          id: 4,
          src: "/images/Image11.png",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "26 Декабрь,2022",
        },
        {
          id: 5,
          src: "/images/Image12.png",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "26 Декабрь,2022",
        },
        {
          id: 6,
          src: "/images/Image13.png",
          title: "Лучшие интерьерные идеи по низкой цене",
          date: "26 Декабрь,2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../assets/style.css";
</style>
