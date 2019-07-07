<template>
  <div>
    <BaseLoader v-if="loading"/>
    <div class="container" v-else>
      <BaseGallery :images="item.images"/>
      {{ item.description }}
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseGallery from '@/components/BaseGallery/BaseGallery'
import { mapState } from 'vuex'
export default {
  components: {
    BaseLoader,
    BaseGallery
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
.base-gallery {
  margin-bottom: var(--spacing-1);
}
</style>
