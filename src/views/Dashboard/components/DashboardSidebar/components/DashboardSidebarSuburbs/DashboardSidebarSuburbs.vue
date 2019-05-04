<template>
  <div class="dashboard-sidebar-suburbs">
    <template v-if="suburbs.length">
      <BaseLabel text="Suburbs"/>
      <BaseButton
        class="suburb-item"
        v-for="(suburb, index) in suburbs" :key="index"
        :selected="index === selectedSuburbIndex"
        :text="suburb.name"
        @click.native="$store.dispatch('dashboardModule/updateSelectedSuburbIndex', index)"
      />
    </template>
    <BaseButton
      text="Add a suburb"
      @click.native="$store.commit('globalModule/toggleSearchState')"
      style="color: var(--color-blue-1)"
    />
  </div>
</template>

<script>
import BaseLabel from '@/components/BaseLabel/BaseLabel'
import BaseButton from '@/components/BaseButton/BaseButton'
import { mapState } from 'vuex'
export default {
  components: {
    BaseLabel,
    BaseButton
  },
  computed: mapState({
    suburbs: state => state.dashboardModule.suburbs.map(suburb => suburb.details),
    selectedSuburbIndex: state => state.dashboardModule.selectedSuburbIndex
  })
}
</script>

<style lang="scss" scoped>
.base-label {
  margin-bottom: var(--spacing-2);
}
.base-button:not(:last-child) {
  margin-bottom: var(--spacing-4);
}
</style>
