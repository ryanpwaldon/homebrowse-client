<template>
  <div class="base-listings">
    <BaseLoader v-if="isLoading"/>
    <ListingCard
      v-else
      v-for="(listing, index) in listings"
      :listing="listing"
      :key="index"
    />
  </div>
</template>

<script>
import ListingCard from './components/ListingCard/ListingCard'
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'base-listings',
  components: {
    ListingCard,
    BaseLoader
  },
  computed: {
    ...mapState({
      isLoading: state => state.suburbsModule.isLoading
    }),
    ...mapGetters({
      listings: 'suburbsModule/listings'
    })
  }
}
</script>

<style lang="scss" scoped>
.base-listings {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  position: relative;
}
.base-loader {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
