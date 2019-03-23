<template>
  <div class="base-sidebar">
    <BaseLogo/>
  </div>
</template>

<script>
import BaseLogo from '@/components/BaseLogo/BaseLogo'
export default {
  components: {
    BaseLogo
  }
}
</script>

<style lang="scss" scoped>
.base-sidebar {
  width: 100%;
  height: 100%;
}
.base-logo {
  margin: 20px;
}
</style>
