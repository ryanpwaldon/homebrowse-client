<template>
  <div class="app">
    <BaseNavPrimary/>
    <div class="main">
      <BaseSidebar/>
      <div class="content">
        <div class="router-container">
          <BaseNavSecondary/>
          <router-view class="router-view"/>
        </div>
        <BaseMap/>
      </div>
    </div>
    <BaseSearch/>
  </div>
</template>

<script>
import BaseNavPrimary from '@/components/BaseNavPrimary/BaseNavPrimary'
import BaseNavSecondary from '@/components/BaseNavSecondary/BaseNavSecondary'
import BaseMap from '@/components/BaseMap/BaseMap'
import BaseSidebar from '@/components/BaseSidebar/BaseSidebar'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    BaseNavPrimary,
    BaseMap,
    BaseSidebar,
    BaseSearch,
    BaseNavSecondary
  },
  computed: mapState({
    searchState: state => state.globalModule.searchState
  })
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
}
.router-container {
  display: flex;
  flex-direction: column;
}
.router-container,
.base-map {
  flex: 1;
}
.router-container {
  overflow: auto;
}
.router-view {
  padding: var(--spacing-1);
}
</style>
