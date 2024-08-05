<template>
    <div>
        <my-header />
        <pro-det-ban />
        <pro-section-info />
        <image-slider />
        <page-footer />
    </div>
</template>

<script>
import ProDetBan from './ProDetBan.vue'
import PageFooter from './PageFooter.vue'
import MyHeader from './MyHeader.vue'
import ProSectionInfo from './ProSectionInfo.vue'
import ImageSlider from './ImageSlider.vue'
export default {
  components: { PageFooter, ProDetBan, MyHeader, ProSectionInfo, ImageSlider },
    name: "ProjectDetails.vue"
}
</script>

<style lang="css">
@import '../assets/style.css';
</style>