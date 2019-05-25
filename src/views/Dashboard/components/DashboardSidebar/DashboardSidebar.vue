<template>
  <div class="dashboard-sidebar">
    <DashboardSidebarSuburbs/>
    <DashboardSidebarFilter/>
  </div>
</template>

<script>
import DashboardSidebarSuburbs from './components/DashboardSidebarSuburbs/DashboardSidebarSuburbs'
import DashboardSidebarFilter from './components/DashboardSidebarFilter/DashboardSidebarFilter'
export default {
  components: {
    DashboardSidebarSuburbs,
    DashboardSidebarFilter
  }
}
</script>

<style lang="scss" scoped>
.dashboard-sidebar {
  top: 0;
  height: 100%;
  position: sticky;
  padding: var(--spacing-1);
}
</style>
