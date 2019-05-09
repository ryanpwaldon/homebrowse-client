<template>
  <div class="dashboard-sidebar-suburbs">
    <template v-if="suburbs.length">
      <BaseLabel text="Suburbs"/>
      <DashboardSidebarSuburbsButton
        v-for="(suburb, index) in suburbs" :key="index"
        :selected="index === selectedSuburbIndex"
        :text="suburb.name"
        @click.native="$store.dispatch('suburbs/updateSelectedSuburbIndex', index)"
      />
    </template>
    <BaseButton
      text="Add a suburb"
      @click.native="$store.commit('ui/setSearchModalStatus', true)"
      style="color: var(--color-blue-1)"
    />
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import BaseButton from '@/components/BaseButton/BaseButton'
import DashboardSidebarSuburbsButton from './components/DashboardSidebarSuburbsButton/DashboardSidebarSuburbsButton'
import { mapState } from 'vuex'
export default {
  components: {
    BaseLabel,
    BaseButton,
    DashboardSidebarSuburbsButton
  },
  computed: mapState({
    suburbs: state => state.suburbs.suburbs.map(suburb => suburb.details),
    selectedSuburbIndex: state => state.suburbs.selectedSuburbIndex
  })
}
</script>

<style lang="scss" scoped>
.base-label {
  margin-bottom: var(--spacing-2);
}
.dashboard-sidebar-suburbs-button:not(:last-child) {
  margin-bottom: var(--spacing-4);
}
</style>
