<template>
  <div class="base-listings">
    <BaseListing
      v-for="(listing, index) in listings"
      :listing="listing"
      :key="index"
    />
  </div>
</template>

<script>
import ListingThumbnail from './components/ListingThumbnail/ListingThumbnail'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    ListingThumbnail
  },
  computed: mapState([
    'listings'
  ])
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
