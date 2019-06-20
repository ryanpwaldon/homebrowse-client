<template>
  <div class="dashboard-content-nav">
    <div class="section">
      <BaseButtonNav
        text="Properties"
        :selected="suburbRouteLastVisitedTabName === 'properties'"
        @click.native="setSuburbRouteLastVisitedTabName('properties')"
      />
      <BaseButtonNav
        text="Statistics"
        :selected="suburbRouteLastVisitedTabName === 'statistics'"
        @click.native="setSuburbRouteLastVisitedTabName('statistics')"
      />
    </div>
    <div class="section" v-if="suburbRouteLastVisitedTabName === 'properties'">
      <BaseFieldSelect
        label="Sort"
        @select="updateFilter({ key: 'sort', value: $event })"
        :selected="sort"
        :options="[
          { value: 'updatedDescending', display: 'Updated recently' },
          { value: 'priceAscending', display: 'Price low to high' },
          { value: 'priceDescending', display: 'Price high to low' }
        ]"
      />
    </div>
  </div>
</template>

<script>
import BaseButtonNav from '@/components/BaseButtonNav/BaseButtonNav'
import BaseFieldSelect from '@/components/BaseFieldSelect/BaseFieldSelect'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    BaseButtonNav,
    BaseFieldSelect
  },
  computed: {
    ...mapState('ui', [
      'suburbRouteLastVisitedTabName'
    ]),
    ...mapState('suburbs/properties', {
      sort: state => state.filter.sort
    })
  },
  methods: {
    ...mapMutations('ui', [
      'setSuburbRouteLastVisitedTabName'
    ]),
    ...mapActions('suburbs/properties', [
      'updateFilter'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-content-nav {
  display: flex;
  justify-content: space-between;
  border-bottom: var(--border-1);
  padding-bottom: var(--spacing-2);
  margin-bottom: var(--spacing-1);
}
.section {
  display: flex;
}
.base-button-nav {
  margin-right: var(--spacing-2);
}
</style>
