<template>
  <div>
    <div class="project-section-info">
      <p class="main-text">{{ maintext }}</p>
      <p class="article">{{ article }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProSectionInfo.vue",
  computed: {
    maintext() {
      return this.$store.state.maintext;
    },
    article() {
      return this.$store.state.article;
    },
  },
};
</script>

<style scoped>
@import "../assets/style.css";

.project-section-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 658px;
  margin: 0 auto;
  margin-top: 200px;
  margin-bottom: 100px;
}

.main-text {
  font-size: 50px;
  text-align: left;
  width: 565px;
}

.article {
  font-size: 22px;
  text-align: justify;
  padding-top: 11px;
}
</style>
