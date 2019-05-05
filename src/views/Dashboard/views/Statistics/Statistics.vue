<template>
  <div class="statistics">
    <BaseLoader v-if="isLoading"/>
    <div class="content" v-else>
      <BaseChart
        v-if="medianPriceData"
        title="Median price"
        :data="medianPriceData"
      />
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseChart from '@/components/BaseChart/BaseChart'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    BaseLoader,
    BaseChart
  },
  created () {
    this.$store.commit('globalModule/setFilterState', 'statistics')
    this.$store.dispatch('dashboardModule/updateSuburbFilterStatistics', {
      indexToUpdate: this.$store.state.dashboardModule.selectedSuburbIndex,
      filterStatistics: this.$store.state.filterModule.statistics
    })
  },
  computed: {
    ...mapState({
      isLoading: state => state.dashboardModule.isLoading
    }),
    ...mapGetters('dashboardModule', [
      'medianPriceData',
      'suburb'
    ])
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 34px;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-4);
}
.subtitle {
  font-size: 18px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray);
  margin-bottom: var(--spacing-1);
}
</style>
