<template>
  <div class="base-statistics">
    <StatisticCard
      label="Houses Sold"
      :value="statistics.series[0].numberSold"
      type="number"
    />
    <StatisticCard
      label="Median Sale Price"
      :value="statistics.series[0].medianSaleListingPrice"
      type="price"
    />
    <StatisticCard
      label="Median Rental Price"
      :value="statistics.series[0].medianRentListingPrice"
      type="price"
    />
  </div>
</template>

<script>
import StatisticCard from './components/StatisticCard/StatisticCard'
import { mapState } from 'vuex'
export default {
  components: {
    StatisticCard
  },
  computed: mapState({
    statistics: state => state.listingsModule.statistics
  })
}
</script>

<style lang="scss" scoped>
.base-statistics {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
}
</style>
