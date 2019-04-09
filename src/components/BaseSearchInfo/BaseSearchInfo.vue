<template>
  <div class="base-search-info">
    <LocationInfo/>
    <FeaturesInfo/>
  </div>
</template>

<script>
import LocationInfo from './components/LocationInfo/LocationInfo'
import FeaturesInfo from './components/FeaturesInfo/FeaturesInfo'
export default {
  components: {
    LocationInfo,
    FeaturesInfo
  }
}
</script>

<style lang="scss" scoped>
.base-search-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
