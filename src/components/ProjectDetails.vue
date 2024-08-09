<template>
    <div>
        <pro-det-ban />
        <pro-section-info />
        <image-slider />
    </div>
</template>

<script>
import ProDetBan from './ProDetBan.vue'
import ProSectionInfo from './ProSectionInfo.vue'
import ImageSlider from './ImageSlider.vue'
export default {
  components: { ProDetBan, ProSectionInfo, ImageSlider },
    name: "ProjectDetails.vue",
    mounted() {
    window.scrollTo(0, 0); 
  },
}
</script>

<style lang="css">
@import '../assets/style.css';
</style>