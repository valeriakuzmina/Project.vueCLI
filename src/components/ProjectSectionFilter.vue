<template>
  <div>
    <div class="project-section-card">
      <div class="project-container-filter">
        <button @click="filterCards('bathroom')" class="bathroom-project btn-project">Ванная комната</button>
        <button @click="filterCards('bedroom')" class="bedroom-project btn-project">Спальня</button>
        <button @click="filterCards('kitchen')" class="kitchen-project btn-project">Кухня</button>
        <button @click="filterCards('living')" class="living-room-project btn-project">Гостиная</button>
      </div>
      <div class="content-card">
        <div
          class="card-project-page"
          v-for="card in filteredCards"
          :key="card.id"
        >
          <img :src="card.imgsrc" alt="photo" class="card-img" />
          <div class="wrapper-content-card">
            <div class="wrapper-content-card-text">
              <p class="card-title-project">{{ card.title }}</p>
              <p class="card-description">{{ card.description }}</p>
            </div>
            <div class="content-card-button">
              <a href=""
                ><img src="/images/next.png" alt="" class="next-button"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSectionFilter.vue",
  data() {
    return {
      projectCards: [
        {
          id: 1,
          teg: "bathroom",
          title: "Минималистичная ванная комната",
          imgsrc: "./images/Image21.png",
          description: "Декор / Планировка",
        },

        {
          id: 2,
          teg: "bathroom",
          title: "Минималистичная ванная комната",
          imgsrc: "./images/Image22.png",
          description: "Декор / Планировка",
        },

        {
          id: 3,
          teg: "bedroom",
          title: "Минималистичная спальня",
          imgsrc: "./images/Image24.png",
          description: "Декор / Планировка",
        },

        {
          id: 4,
          teg: "bedroom",
          title: "Минималистичная спальня",
          imgsrc: "./images/Image25.png",
          description: "Декор / Планировка",
        },

        {
          id: 5,
          teg: "kitchen",
          title: "Минималистичная кухня",
          imgsrc: "./images/Image26.png",
          description: "Декор / Планировка",
        },

        {
          id: 6,
          teg: "kitchen",
          title: "Минималистичная кухня",
          imgsrc: "./images/Image27.png",
          description: "Декор / Планировка",
        },

        {
          id: 7,
          teg: "living",
          title: "Минималистичная гостиная",
          imgsrc: "./images/Image28.png",
          description: "Декор / Планировка",
        },

        {
          id: 8,
          teg: "living",
          title: "Минималистичная гостиная",
          imgsrc: "./images/Image29.png",
          description: "Декор / Планировка",
        },
      ],

      selectedTeg: null,
    };
  },

  computed: {
    filteredCards() {
      if (!this.selectedTeg) {
        return this.projectCards;
      }
      return this.projectCards.filter((card) => card.teg === this.selectedTeg);
    },
  },

  methods: {
    filterCards(teg) {
      this.selectedTeg = teg;
    },
  },
};
</script>

<style scoped>
/* @import "../assets/style.css"; */

.project-section-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 200px;
}

.project-container-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 880px;
  height: 75px;
  gap: px;
  border: 1px solid rgb(205, 162, 116);
  border-radius: 18px;
  margin: 0 auto;
}

.btn-project {
  width: 207px;
  height: 75px;
  background-color: white;
  font-size: 18px;
  text-align: center;
  border: 0px;
}

.btn-project:hover {
  background-color: rgb(205, 162, 116);
  color: white;
  border-radius: 18px;
}

.content-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-top: 60px;
  margin: 0 auto;
  width: 1201px;
  margin-bottom: 200px;
}

.card-project-page {
  width: 585px;
}

.card-title-project{
    font-size: 25px;
}
</style>
