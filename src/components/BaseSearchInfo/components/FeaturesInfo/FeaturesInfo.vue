<template>
  <div class="features-info">
    <div class="container">
      <img class="icon" src="@/assets/img/bed.svg">
      <span class="text">{{ bedrooms }}</span>
    </div>
    <div class="container">
      <img class="icon" src="@/assets/img/bath.svg">
      <span class="text">{{ bathrooms }}</span>
    </div>
    <div class="container">
      <img class="icon" src="@/assets/img/car.svg">
      <span class="text">{{ carspaces }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    bedrooms: state => state.listingsModule.search.bedrooms,
    bathrooms: state => state.listingsModule.search.bathrooms,
    carspaces: state => state.listingsModule.search.carspaces
  })
}
</script>

<style lang="scss" scoped>
.features-info {
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--spacing-3);
}
.container {
  display: flex;
  align-items: center;
}
.icon {
  height: 1em;
  margin-right: var(--spacing-4);;
}
.text {
  font-weight: var(--font-weight-regular);
}
</style>
