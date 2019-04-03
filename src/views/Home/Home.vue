<template>
  <div class="home">
    <div class="container">
      <div class="main">
        <BaseNav/>
        <div class="content">
          <div class="content-header">
            <div class="header-title"></div>
          </div>
          <div class="listings-title">Listings</div>
          <div class="listings">
            <ListingThumbnail
              v-for="(listing, index) in listings"
              :listing="listing"
              :key="index"
            />
          </div>
        </div>
      </div>
      <BaseMap/>
    </div>
    <BaseSearch/>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseMap from '@/components/BaseMap/BaseMap'
import ListingThumbnail from '@/components/BaseListings/components/ListingThumbnail/ListingThumbnail'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    BaseNav,
    BaseMap,
    ListingThumbnail,
    BaseSearch
  },
  mounted () {
    this.$store.dispatch('fetchListings', {
      locationTerms: 'glebe'
    })
  },
  computed: mapState({
    listings: state => state.listings.listings
  })
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
.main,
.base-map {
  width: 50%;
  height: 100%;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
}
.content {
  width: 100%;
  max-width: 680px;
  padding: var(--spacing-1);
}
.content-header {
  width: 100%;
  display: flex;
  margin-bottom: var(--spacing-0);
}
.listings-title {
  font-weight: var(--font-weight-bold);
  margin-bottom: 40px;
  text-align: center;
  font-size: 14px;
}
.listings {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
}
.base-map {
  box-shadow: var(--box-shadow-1);
}
</style>
