<template>
  <div class="statistics">
    <BaseLoader v-if="loading"/>
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
  computed: {
    ...mapState('dashboard/statistics', {
      loading: state => state.loading
    }),
    ...mapGetters('dashboard/statistics', [
      'medianPriceData'
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
