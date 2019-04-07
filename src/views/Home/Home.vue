<template>
  <div class="home">
    <div class="container">
      <BaseNav/>
      <div class="search" v-if="searchState">
        <BaseFormSearch/>
      </div>
      <div class="results" v-else>
        <!-- BaseSearchInfo -->
        <!-- BaseStatistics -->
        <BaseListings :listings="listings"/>
      </div>
    </div>
    <BaseMap/>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseMap from '@/components/BaseMap/BaseMap'
import BaseFormSearch from '@/components/BaseFormSearch/BaseFormSearch'
import BaseListings from '@/components/BaseListings/BaseListings'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    BaseNav,
    BaseMap,
    BaseFormSearch,
    BaseListings
  },
  computed: mapState({
    searchState: state => state.globalStore.searchState,
    listings: state => state.listingsStore.listings
  })
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  & > * {
    width: 50%;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 40px;
}
.search {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.results {
  width: 100%;
  max-width: 590px;
}
</style>
