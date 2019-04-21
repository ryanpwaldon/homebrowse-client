<template>
  <div class="base-listings">
    <BaseListingCard
      v-for="(listing, index) in listings"
      :listing="listing"
      :key="index"
    />
  </div>
</template>

<script>
import BaseListingCard from '@/components/BaseListingCard/BaseListingCard'
import { mapState } from 'vuex'
export default {
  name: 'base-listings',
  components: {
    BaseListingCard
  },
  computed: mapState({
    listings: state => state.listingsModule.listings
  })
}
</script>

<style lang="scss" scoped>
.base-listings {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
}
</style>
