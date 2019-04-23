<template>
  <div class="base-listings">
    <BaseLoader v-if="isLoading"/>
    <div class="listings-container" v-else>
      <BaseListingCard
        v-for="(listing, index) in listings"
        :listing="listing"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import BaseListingCard from '@/components/BaseListingCard/BaseListingCard'
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import { mapState } from 'vuex'
export default {
  name: 'base-listings',
  components: {
    BaseListingCard,
    BaseLoader
  },
  computed: mapState({
    listings: state => state.listingsModule.listings,
    isLoading: state => state.listingsModule.isLoading
  })
}
</script>

<style lang="scss" scoped>
.base-listings {
  width: 100%;
  height: 100%;
  position: relative;
}
.listings-container {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
  position: relative;
}
.base-loader {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
