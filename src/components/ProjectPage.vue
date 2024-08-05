<template>
    <div>
        <banner-project-page />
        <project-section-filter />
        <number-for-card-page />
        <page-footer />

        <project-details />
    </div>
</template>

<script>
import BannerProjectPage from './BannerProjectPage.vue'
import NumberForCardPage from './NumberForCardPage.vue'
import PageFooter from './PageFooter.vue'
import ProjectSectionFilter from './ProjectSectionFilter.vue'
import ProjectDetails from './ProjectDetails.vue'
export default {
  components: { PageFooter, BannerProjectPage, ProjectSectionFilter, NumberForCardPage, ProjectDetails},
    name: "ProjectPage.vue"
}
</script>

<style lang="css">
@import '../assets/style.css';
</style>