<template>
  <div
    :class="{'base-button-search': true, 'hidden': showSearch}"
    @click="$store.commit('updateShowSearch', true)"
  >
    Search for a suburb
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState([
    'showSearch'
  ])
}
</script>

<style lang="scss" scoped>
.base-button-search {
  width: 100%;
  max-width: 200px;
  background: var(--color-white);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  box-shadow: var(--box-shadow-1);
  color: var(--color-medium-gray);
  font-size: 14px;
  cursor: text;
  font-weight: 500;
  transition: opacity .2s;
}
.hidden {
  opacity: 0;
}
</style>
