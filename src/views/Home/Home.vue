<template>
  <div class="home">
    <div class="container">
      <BaseNav/>
      <div class="search" v-if="searchState">
        <BaseFormSearch/>
      </div>
      <div class="results" v-else>
        <BaseSearchInfo/>
        <BaseStatistics/>
        <BaseListings/>
      </div>
    </div>
    <div class="map-container">
      <BaseMap/>
    </div>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav/BaseNav'
import BaseMap from '@/components/BaseMap/BaseMap'
import BaseFormSearch from '@/components/BaseFormSearch/BaseFormSearch'
import BaseSearchInfo from '@/components/BaseSearchInfo/BaseSearchInfo'
import BaseListings from '@/components/BaseListings/BaseListings'
import BaseStatistics from '@/components/BaseStatistics/BaseStatistics'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    BaseNav,
    BaseMap,
    BaseFormSearch,
    BaseSearchInfo,
    BaseListings,
    BaseStatistics
  },
  computed: mapState({
    searchState: state => state.globalModule.searchState
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
.base-search-info {
  margin-bottom: var(--spacing-0);
}
.base-statistics {
  margin-bottom: var(--spacing-0);
}
.map-container {
  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) 0;
}
.base-map {
  border-radius: var(--border-radius-1);
}
</style>
