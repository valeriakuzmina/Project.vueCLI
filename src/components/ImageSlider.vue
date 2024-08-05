<template>
  <div>
    <div class="image-slider">
      <div class="main-image">
        <img
          :src="slides[currentIndex].image"
          :alt="slides[currentIndex].title"
          :class="{ zoomed: isZoomed }"
        />
        <button class="zoom-button" @click="toggleZoom">🔍</button>
      </div>
      <div class="buttons">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="setSlide(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider.vue",
  data() {
    return {
      currentIndex: 0,
        isZoomed: false,
      slides: [
        { image: "/images/slider1.png", title: "Slide 1" },
        { image: "/images/blog-detail-card.png", title: "Slide 2" },
        { image: "/images/banner.png", title: "Slide 3" },
      ],
    };
  },

  methods: {
    setSlide(index) {
      this.currentIndex = index;
      this.isZoomed = false; // Сброс увеличения при смене изображения
    },
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    }
  }
};
</script>

<style scoped>
@import "../assets/style.css";

.image-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
}

.main-image img {
  width: 1021px;
}

.main-image img.zoomed {
  transform: scale(1.5); /* Применяем увеличение */
}

.zoom-button {
  position: absolute;
  background-color: aliceblue;
  width: 130px;
  height: 130px;
  top: 11000px;
  right: 950px;
  padding: 5px;
  cursor: pointer;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  background-color: lightgray;
  cursor: pointer;
}

button.active {
  background-color: gray;
}
</style>
