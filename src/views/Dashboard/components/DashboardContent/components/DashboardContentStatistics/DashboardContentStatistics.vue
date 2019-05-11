<template>
  <div class="dashboard-content-statistics">
    <BaseLoader v-if="loading"/>
    <div class="content" v-else>
      <div class="statistics-container">
        <BaseStatistic
          title="Sale price"
          subtitle="1Y Median"
          :value="statisticSoldMedianPrice"
          format="price"
        />
        <BaseStatistic
          title="Rental price"
          subtitle="1Y Median"
          :value="statisticRentMedianPrice"
          format="price"
        />
        <BaseStatistic
          title="Rental Yield"
          subtitle="1Y Median"
          :value="statisticRentalYield"
          format="percentage"
        />
      </div>
      <BaseChart
        title="Median price"
        :data="chartDataSoldMedianPrice"
      />
    </div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
import BaseStatistic from '@/components/BaseStatistic/BaseStatistic'
import BaseChart from '@/components/BaseChart/BaseChart'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    BaseLoader,
    BaseStatistic,
    BaseChart
  },
  computed: {
    ...mapState('suburbs/statistics', {
      loading: state => state.loading
    }),
    ...mapGetters('suburbs/statistics', [
      'statisticSoldMedianPrice',
      'statisticRentMedianPrice',
      'chartDataSoldMedianPrice'
    ]),
    statisticRentalYield () {
      return (this.statisticRentMedianPrice * 52) / this.statisticSoldMedianPrice
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
