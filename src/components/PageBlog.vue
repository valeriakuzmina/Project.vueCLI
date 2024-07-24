<template>
<div>
    <MyHeader />
      <div class="blog-banner">
      <img src="../assets/images/blog-banner.png" alt="" class="blog-banner-img" />
      <div class="blog-banner-title">
        <p class="blog-banner-text">
          Статьи & <br />
          Новости
        </p>
        <p class="blog-banner-description">
          Домой / <br />
          Блог
        </p>
      </div>
    </div>
    <div class="last-post-container">
      <div class="wrapper-post">
        <p class="post-title">Последний пост</p>
        <div class="post-content">
          <img src="../assets/images/last-post.png" alt="" class="post-img" />
          <div class="post-content-text">
            <p class="post-content-text-title">
              Low Cost Latest Invented Interior Designing Ideas
            </p>
            <p class="post-content-text-description">
              С того времени этот, похожий на латинский, <br />
              текст стал стандартом в печатной <br />
              промышленности для примеров шрифтов и текстов. Перед появлением
              электронных <br />
              издательств дизайнеры импровизировали в <br />
              работе над макетами, изображая текст при <br />
              помощи волнистых линий. С появлением <br />
              самоклеющихся наклеек с напечатанным текстом «Lorem ipsum»
              появился более <br />
              реалистичный способ обозначения <br />
              расположения текста на странице.
            </p>
            <div class="post-data-text">
              <p class="post-data-text-time">26 December,2022</p>
              <img src="../assets/images/next.png" alt="" class="next-button-2" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="news-wrapper">
        <p class="news-wrapper-title">Статьи & Новости</p>
      <div class="blog-card-container-page-blog">
        <div class="blog-card" v-for="card in cards" :key="card.id"> 
          <div class="img-container-3" >
              <img :src="card.src" alt="" class="blog-card-img">
          </div>
          <p class="blog-title">{{card.title}}</p>
          <div class="blog-description">
            <p class="blog-description-text">{{card.date}}</p>
            <a href="blogdetails.html" @click.prevent="$emit('navigate', 'CardComponent')"><img src="../assets/images/next.png" alt="" class="next-button-2" /></a> 
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
            <a href=""><img
            src="../assets/images/next-blog.png"
            alt="photo"
            class="news-button-next"
          /></a>
        </div>
      </div>
    </section>
   <PageFooter />
</div>

   
</template>

import MyHeader from './components/MyHeader.vue'
import PageFooter from './components/PageFooter.vue'

<script>
export default {
 name: 'PageBlog.vue',
 data() {
    return {
    cards: [
      {
        id: 1,
        src: '../assets/images/Image8.png',
        title: "Лучшие интерьерные идеи по низкой цене",
        date: "26 Декабрь,2022",
      },
      {
        id: 2,
        src:  '../assets/images/Image9.png',
        title: "Лучшие интерьерные идеи по низкой цене",
        date: "26 Декабрь,2022",
      },
      {
        id: 3,
        src: "../src/assets/images/Image10.png",
        title: "Лучшие интерьерные идеи по низкой цене",
        date: "26 Декабрь,2022",
      },
      {
        id: 4,
        src: "./images/Image11.png",
        title: "Лучшие интерьерные идеи по низкой цене",
        date: "26 Декабрь,2022",
      },
      {
        id: 5,
        src: "./images/Image12.png",
        title: "Лучшие интерьерные идеи по низкой цене",
        date: "26 Декабрь,2022",
      },
      {
        id: 6,
        src: "./images/Image13.png",
        title: "Лучшие интерьерные идеи по низкой цене",
        date: "26 Декабрь,2022",
      }
    ]
    };
    }
  };
</script>


<style scoped>
@import '../assets/style.css';
</style>