<template>
    <div>
        <banner-project-page />
        <project-section-filter />
        <number-for-card-page />
        <page-footer />
    </div>
</template>

<script>
import BannerProjectPage from './BannerProjectPage.vue'
import NumberForCardPage from './NumberForCardPage.vue'
import PageFooter from './PageFooter.vue'
import ProjectSectionFilter from './ProjectSectionFilter.vue'
export default {
  components: { PageFooter, BannerProjectPage, ProjectSectionFilter, NumberForCardPage },
    name: "ProjectPage.vue"
}
</script>

<style lang="css">
@import '../assets/style.css';
</style>