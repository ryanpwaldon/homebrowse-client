<template>
  <div class="statistics">
    <Filters/>
    <BaseLoader v-if="loading"/>
    <div class="content" v-show="!loading">
      <div class="statistics-container" v-if="currentPeriodStatistics">
        <BaseStatistic title="Median Sale Price" subtitle="1 Year Median" :value="currentPeriodStatistics.medianSoldPrice" format="price"/>
        <BaseStatistic title="Median Rent Price" subtitle="1 Year Median" :value="currentPeriodStatistics.medianRentListingPrice" format="price"/>
        <BaseStatistic title="Median Rental Yield" :value="currentPeriodStatistics.medianRentListingPrice * 52 / currentPeriodStatistics.medianSoldPrice" format="percent"/>
      </div>
      <Chart/>
    </div>
  </div>
</template>

<script>
import Filters from './partials/Filters/Filters'
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseStatistic from '@/components/BaseStatistic/BaseStatistic'
import Chart from './partials/Chart/Chart'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    Filters,
    BaseLoader,
    BaseStatistic,
    Chart
  },
  mounted () {
  },
  computed: {
    ...mapState('entities/suburbs', {
      selectedSuburbId: state => state.selectedId
    }),
    ...mapState('entities/statistics', {
      statisticsItems: state => state.items,
      loading: state => state.loading
    }),
    currentPeriodStatistics () {
      return this.statisticsItems[this.selectedSuburbId] && this.statisticsItems[this.selectedSuburbId][this.statisticsItems[this.selectedSuburbId].length - 1]
    }
  },
  watch: {
    selectedSuburbId: {
      immediate: true,
      handler: function () {
        this.$store.dispatch('entities/statistics/fetchItems')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.statistics-container {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  position: relative;
}
</style>
