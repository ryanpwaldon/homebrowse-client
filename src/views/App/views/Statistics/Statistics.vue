<template>
  <div class="statistics"/>
</template>

<script>
export default {
  created () {
    this.$store.commit('globalModule/setFilterState', 'statistics')
  }
}
</script>
