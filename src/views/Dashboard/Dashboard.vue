<template>
  <div class="dashboard">
    <DashboardSidebar/>
    <DashboardContent/>
    <DashboardMap/>
    <BaseSearch/>
  </div>
</template>

<script>
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar'
import DashboardContent from './components/DashboardContent/DashboardContent'
import DashboardMap from './components/DashboardMap/DashboardMap'
import BaseSearch from '@/components/BaseSearch/BaseSearch'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  components: {
    DashboardSidebar,
    DashboardContent,
    DashboardMap,
    BaseSearch
  },
  computed: {
    ...mapState('globalModule', [
      'searchState'
    ]),
    ...mapGetters('dashboardModule', [
      'suburb'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  display: flex;
}
.dashboard-sidebar {
  width: 210px;
  flex-shrink: 0;
}
.dashboard-content,
.dashboard-map {
  flex: 1;
}
</style>
