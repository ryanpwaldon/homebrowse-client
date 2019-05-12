<template>
  <div class="base-property-card-placeholder">
    <BaseLoader/>
    <div class="placeholder-image"/>
    <div class="content"><div/></div>
  </div>
</template>

<script>
import BaseLoader from '@/components/BaseLoader/BaseLoader'
export default {
  components: {
    BaseLoader
  }
}
</script>

<style lang="scss" scoped>
.base-property-card-placeholder {
  background: var(--color-gray-5);
  border-radius: var(--border-radius-1);
  position: relative;
  overflow: hidden;
  width: 100%;
}
.base-loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.placeholder-image {
  width: 100%;
  padding-top: calc(100% / 3 * 2);
  height: 0;
}
.content {
  display: flex;
  font-size: 14px;
  padding: var(--spacing-2);
}
.content div {
  height: 1em;
}
</style>
