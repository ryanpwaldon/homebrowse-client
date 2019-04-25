<template>
  <div class="location-info">
    <span class="suburb">{{ suburb }} </span>
    <span class="state">{{ state }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    suburb: state => state.filterModule.search.location.suburb,
    state: state => state.filterModule.search.location.state
  })
}
</script>

<style lang="scss" scoped>
.location-info {
  font-size: 18px;
  font-weight: var(--font-weight-bold);
}
.state {
  color: var(--color-gray);
}
</style>
