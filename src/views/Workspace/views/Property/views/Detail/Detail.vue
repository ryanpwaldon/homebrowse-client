<template>
  <div>
    <BaseLoader v-if="loading"/>
    <div class="container" v-else>
      <BaseImageGallery :images="item.images"/>
      <BaseLabel class="title" text="Description"/>
      <BaseDescriptionExpandable :text="item.description"/>
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseImageGallery from '@/components/BaseImageGallery/BaseImageGallery'
import BaseDescriptionExpandable from '@/components/BaseDescriptionExpandable/BaseDescriptionExpandable'
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import { mapState } from 'vuex'
export default {
  components: {
    BaseLabel,
    BaseLoader,
    BaseImageGallery,
    BaseDescriptionExpandable
  },
  mounted () {
    this.$el.closest('.workspace-content').scrollTop = 0
  },
  computed: {
    ...mapState('entities/properties', [
      'selectedId'
    ]),
    ...mapState('entities/propertiesDetail', [
      'items',
      'loading'
    ]),
    item () {
      return this.items[this.selectedId]
    }
  },
  watch: {
    selectedId: {
      immediate: true,
      handler: function (selectedId) {
        this.$store.dispatch('entities/propertiesDetail/fetchItem', { id: selectedId })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-image-gallery {
  margin-bottom: var(--spacing-1);
}
.title {
  margin-bottom: var(--spacing-2);
}
</style>
