<template>
  <div class="sidebar">
    <BaseButton
      class="search-button"
      text="Search"
      @click.native="$store.commit('ui/setSearchModalStatus', true)"/>
    <BaseDivider/>
    <Suburbs/>
    <BaseDivider/>
    <Properties/>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton/BaseButton'
import BaseDivider from '@/components/BaseDivider/BaseDivider'
import Suburbs from './partials/Suburbs/Suburbs'
import Properties from './partials/Properties/Properties'
import { mapState } from 'vuex'
export default {
  components: {
    BaseButton,
    BaseDivider,
    Suburbs,
    Properties
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  top: 0;
  height: 100%;
  position: sticky;
  padding: var(--spacing-1);
  background: var(--color-white-1);
  border-right: var(--border-1);
}
.search-button {
  color: var(--color-blue-1);
}
</style>
