<template>
  <div class="search">
    <div class="container">
      <div class="main">
        <BaseNav/>
        <div class="content">
          <BaseSuburbSummary/>
          <div class="listings-title">Listings</div>
          <BaseListings/>
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
import BaseListings from '@/components/BaseListings/BaseListings'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import BaseSuburbSummary from '@/components/BaseSuburbSummary/BaseSuburbSummary'
import { mapState } from 'vuex'
export default {
  name: 'search',
  components: {
    BaseNav,
    BaseMap,
    BaseListings,
    BaseSearch,
    BaseSuburbSummary
  },
  computed: mapState({
    listings: state => state.searchStore.listings
  })
}
</script>

<style lang="scss" scoped>
.search {
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
.base-suburb-summary {
  margin-bottom: var(--spacing-0);
}
.listings-title {
  font-weight: var(--font-weight-bold);
  margin-bottom: 40px;
  text-align: center;
  font-size: 14px;
}
.base-map {
  box-shadow: var(--box-shadow-1);
}
</style>
