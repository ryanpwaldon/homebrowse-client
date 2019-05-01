<template>
  <div class="statistics">
    <BaseChart
      :data="medianPriceData"
    />
  </div>
</template>

<script>
import BaseChart from '@/components/BaseChart/BaseChart'
import { mapGetters } from 'vuex'
export default {
  components: {
    BaseChart
  },
  created () {
    this.$store.commit('globalModule/setFilterState', 'statistics')
  },
  computed: mapGetters('suburbsModule', [
    'medianPriceData'
  ])
}
</script>
