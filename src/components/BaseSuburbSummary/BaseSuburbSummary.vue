<template>
  <div class="base-suburb-summary">
    <div class="header">
      <div class="title">
        <span class="suburb">{{ filter.locations[0].suburb }}</span>&nbsp;
        <span class="state">{{ filter.locations[0].state }}</span>
      </div>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    filter: state => state.searchStore.filter
  })
}
</script>

<style lang="scss" scoped>
.base-suburb-summary {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 18px;
  font-weight: var(--font-weight-bold);
}
.state {
  color: var(--color-gray);
}
.content {
  width: 100%;
  display: grid;
  grid-gap: var(--spacing-1);
  grid-template-columns: repeat(3, 1fr);
}
</style>
