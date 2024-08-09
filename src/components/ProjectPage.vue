<template>
    <div>
        <banner-project-page />
        <project-section-filter />
        <number-for-card-page />
    </div>
</template>

<script>
import BannerProjectPage from './BannerProjectPage.vue'
import NumberForCardPage from './NumberForCardPage.vue'
import ProjectSectionFilter from './ProjectSectionFilter.vue'
export default {
  components: { BannerProjectPage, ProjectSectionFilter, NumberForCardPage, },
    name: "ProjectPage.vue",
    mounted() {
    window.scrollTo(0, 0); 
  },
}
</script>

<style lang="css">
@import '../assets/style.css';
</style>