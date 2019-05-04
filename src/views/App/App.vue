<template>
  <div class="app">
    <BaseNavPrimary/>
    <div class="main">
      <BaseSidebar/>
      <div class="content">
        <div class="router-container">
          <template v-if="suburb">
            <div class="title">{{ suburb.name }}</div>
            <div class="subtitle">{{ suburb.state }} {{ suburb.postCode }}</div>
          </template>
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
import BaseMap from '@/components/BaseMap/BaseMap'
import BaseSidebar from '@/components/BaseSidebar/BaseSidebar'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    BaseNavPrimary,
    BaseMap,
    BaseSidebar,
    BaseSearch
  },
  computed: {
    ...mapState({
      searchState: state => state.globalModule.searchState
    }),
    ...mapGetters('suburbsModule', [
      'suburb'
    ])
  }
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
  padding: var(--spacing-1);
}
.title {
  font-size: 34px;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-3);
}
.subtitle {
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray);
  margin-bottom: var(--spacing-1);
}
</style>
