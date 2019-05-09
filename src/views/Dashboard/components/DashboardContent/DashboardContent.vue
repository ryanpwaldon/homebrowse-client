<template>
  <div class="dashboard-content">
    <div class="title-container">
      <div class="title">{{ selectedSuburb.details.name }}</div>
      <div class="subtitle">{{ selectedSuburb.details.state }} {{ selectedSuburb.details.postCode }}</div>
    </div>
    <DashboardContentNav/>
    <component :is="selectedDashboardSubviewComponent"/>
  </div>
</template>

<script>
import DashboardContentNav from './components/DashboardContentNav/DashboardContentNav'
import DashboardContentProperties from './components/DashboardContentProperties/DashboardContentProperties'
import DashboardContentStatistics from './components/DashboardContentStatistics/DashboardContentStatistics'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    DashboardContentNav
  },
  computed: {
    ...mapGetters('suburbs', [
      'selectedSuburb'
    ]),
    ...mapState('ui', [
      'selectedDashboardSubview'
    ]),
    selectedDashboardSubviewComponent () {
      switch (this.selectedDashboardSubview) {
        case 'statistics': return DashboardContentStatistics
        case 'properties': return DashboardContentProperties
        default: return DashboardContentProperties
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-content {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-1);
  overflow: auto;
  min-width: 560px;
}
.title-container {
  margin-bottom: var(--spacing-1);
}
.title {
  font-size: 24px;
  color: var(--color-black);
  font-weight: var(--font-weight-bold);
}
.subtitle {
  font-size: 14px;
  color: var(--color-gray-1);
  font-weight: var(--font-weight-bold);
}
</style>
