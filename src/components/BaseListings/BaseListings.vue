<template>
  <div class="base-listings">
    <ListingCard
      v-for="(listing, index) in listings"
      :listing="listing"
      :key="index"
    />
  </div>
</template>

<script>
import ListingCard from './components/ListingCard/ListingCard'
import { mapGetters } from 'vuex'
export default {
  name: 'base-listings',
  components: {
    ListingCard
  },
  computed: {
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
</style>
