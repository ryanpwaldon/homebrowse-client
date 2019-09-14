<template>
  <BaseModalOverlay
    :condition="isOpen"
    @close="isOpen = false">
    <div class="container">
      <BaseImageGalleryFullScreen :images="images"/>
    </div>
  </BaseModalOverlay>
</template>

<script>
import BaseModalOverlay from '@/components/BaseModalOverlay/BaseModalOverlay'
import BaseImageGalleryFullScreen from '@/components/BaseImageGalleryFullScreen/BaseImageGalleryFullScreen'
export default {
  components: {
    BaseModalOverlay,
    BaseImageGalleryFullScreen
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isOpen: false
  })
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: calc(var(--spacing-1) * 2);
}
</style>
