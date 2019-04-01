<template>
  <div class="base-nav" ref="base-nav">
    <BaseLogo/>
    <BaseButtonSearch/>
    <BaseProfile/>
  </div>
</template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo'
import BaseProfile from '@/components/BaseProfile/BaseProfile'
import BaseButtonSearch from '@/components/BaseButtonSearch/BaseButtonSearch'
export default {
  components: {
    BaseLogo,
    BaseProfile,
    BaseButtonSearch
  }
}
</script>

<style lang="scss" scoped>
.base-nav {
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.base-nav > *:not(:last-child) {
  margin-right: var(--spacing-1);
}
.base-button-search {
  margin-right: auto !important;
}
</style>
