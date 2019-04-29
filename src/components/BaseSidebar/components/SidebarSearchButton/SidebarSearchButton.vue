<template>
  <BaseButtonStretch
    class="search-button"
    text="Add a suburb"
    @click.native="$store.commit('globalModule/toggleSearchState')"
  />
</template>

<script>
import BaseButtonStretch from '@/components/BaseButtonStretch/BaseButtonStretch'
export default {
  components: {
    BaseButtonStretch
  }
}
</script>

<style lang="scss" scoped>
.base-button-stretch {
  color: #4B96E9;
}
</style>
