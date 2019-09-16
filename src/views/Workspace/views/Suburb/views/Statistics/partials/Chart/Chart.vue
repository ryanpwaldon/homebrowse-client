<template>
  <div class="chart">
    <div class="filters">
      <BaseFieldSelect
        @select="selectedValue = $event"
        :selected="selectedValue"
        :options="options"
      />
    </div>
    <BaseChart
      v-if="chartData.length"
      class="chart-item"
      :title="selectedOption.display"
      :format="selectedOption.format"
      :data="chartData"
      :selected-id="selectedSuburbId"
    />
  </div>
</template>

<script>
import BaseChart from '@/components/BaseChart/BaseChart'
import BaseFieldSelect from '@/components/BaseFieldSelect/BaseFieldSelect'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    BaseChart,
    BaseFieldSelect
  },
  data () {
    return {
      selectedValue: 'medianSoldPrice',
      options: [
        { value: 'medianSoldPrice', display: 'Median Sold Price', format: 'price' },
        { value: 'medianSaleListingPrice', display: 'Median Sale Listing Price', format: 'price' },
        { value: 'medianRentListingPrice', display: 'Median Rent Listing Price', format: 'price' },
        { value: 'numberSold', display: 'Amount Sold', format: 'number' },
        { value: 'numberSaleListing', display: 'Amount Listed for Sale', format: 'number' },
        { value: 'numberRentListing', display: 'Amount Listed for Rent', format: 'number' },
        { value: 'auctionNumberAuctioned', display: 'Amount Auctioned', format: 'number' },
        { value: 'auctionNumberSold', display: 'Amount Sold at Auction', format: 'number' },
        { value: 'auctionNumberWithdrawn', display: 'Amount of Auctions Widthdrawn', format: 'number' },
        { value: 'daysOnMarket', display: 'Average Days on Market', format: 'number' },
        { value: 'discountPercentage', display: 'Average Discount Percentage', format: 'percent' }
        // { value: 'highestRentListingPrice', display: 'Highest Rent Listing Price', format: 'price' },
        // { value: 'lowestRentListingPrice', display: 'Lowest Rent Listing Price', format: 'price' }
        // { value: 'highestSoldPrice', display: 'Highest Sold Price', format: 'price' },
        // { value: 'lowestSoldPrice', display: 'Lowest Sold Price', format: 'price' },
        // { value: 'highestSaleListingPrice', display: 'Highest Sale Listing Price', format: 'price' },
        // { value: 'lowestSaleListingPrice', display: 'Lowest Sale Listing Price', format: 'price' },
      ]
    }
  },
  computed: {
    ...mapState('entities/suburbs', {
      selectedSuburbId: state => state.selectedId
    }),
    ...mapGetters('entities/suburbs', {
      suburbsById: 'itemsById'
    }),
    ...mapState('entities/statistics', {
      statisticsItems: state => state.items
    }),
    selectedOption () {
      return this.options.find(item => item.value === this.selectedValue)
    },
    chartData () {
      if (!Object.keys(this.statisticsItems).length) return []
      return this.suburbsById.reduce((acc, suburb) => {
        if (this.statisticsItems[suburb.id]) {
          acc.push({
            id: suburb.id,
            name: suburb.name,
            dates: this.statisticsItems[suburb.id].map(series => series.date),
            values: this.statisticsItems[suburb.id].map(series => series[this.selectedValue])
          })
        }
        return acc
      }, [])
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.filters {
  width: 100%;
  display: flex;
  margin-bottom: var(--spacing-2);
}
</style>
