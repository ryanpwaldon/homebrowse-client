<template>
  <div class="statistics">
    <BaseLoader v-if="loading"/>
    <div class="content" v-show="!loading">
      <div class="statistics-container">
      </div>
      <BaseChart
        v-if="medianSoldPrice.length"
        title="Median price"
        :data="medianSoldPrice"
        :selected-id="selectedId"
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
  mounted () {
  },
  computed: {
    ...mapState('entities/suburbs', [
      'selectedId'
    ]),
    ...mapState('entities/statistics', [
      'loading'
    ]),
    ...mapGetters('entities/statistics', [
      'medianSoldPrice'
    ])
  },
  watch: {
    selectedId: {
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
