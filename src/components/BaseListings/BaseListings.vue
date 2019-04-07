<template>
  <div class="base-listings">
    <div class="title">Listings</div>
    <div class="content">
      <BaseListingThumbnail
        v-for="(listing, index) in listings"
        :listing="listing"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BaseListingThumbnail from '@/components/BaseListingThumbnail/BaseListingThumbnail'
import { mapState } from 'vuex'
export default {
  name: 'base-listings',
  components: {
    BaseListingThumbnail
  },
  props: {
    listings: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-1);
  text-align: center;
  font-size: 14px;
}
.content {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
}
</style>
