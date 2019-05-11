<template>
  <div class="dashboard-content-nav">
    <BaseButtonNav
      text="Properties"
      :selected="selectedDashboardSubview === 'properties'"
      @click.native="updateSelectedDashboardSubview('properties')"
    />
    <BaseButtonNav
      text="Statistics"
      :selected="selectedDashboardSubview === 'statistics'"
      @click.native="updateSelectedDashboardSubview('statistics')"
    />
  </div>
</template>

<script>
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    BaseButtonNav
  },
  computed: mapState('ui', [
    'selectedDashboardSubview'
  ]),
  methods: mapActions('ui', [
    'updateSelectedDashboardSubview'
  ])
}
</script>

<style lang="scss" scoped>
.dashboard-content-nav {
  display: flex;
  justify-content: flex-start;
  border-bottom: var(--border-1);
  padding-bottom: var(--spacing-2);
  margin-bottom: var(--spacing-1);
}
.base-button-nav {
  margin-right: var(--spacing-2);
}
</style>
