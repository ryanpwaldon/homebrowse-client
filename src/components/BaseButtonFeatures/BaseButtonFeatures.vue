<template>
  <div
    class="base-button-features"
    @click="$store.commit('updateShowSearch', true)"
  >
  <img class="feature-icon" src="@/assets/img/bed.svg">
  <div class="feature-item">{{ filter.features.bedrooms }}</div>
  <img class="feature-icon" src="@/assets/img/bath.svg">
  <div class="feature-item">{{ filter.features.bathrooms }}</div>
  <img class="feature-icon" src="@/assets/img/car.svg">
  <div class="feature-item">{{ filter.features.carspaces }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'filter'
  ])
}
</script>

<style lang="scss" scoped>
.base-button-features {
  padding: var(--spacing-2);
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  background-color: var(--color-white);
  font-size: 14px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.feature-item {
  font-size: 14px;
  &:not(:last-child) {
    margin-right: var(--spacing-3);
  }
}
.feature-icon {
  height: 1em;
  margin-right: var(--spacing-4);
}
</style>
