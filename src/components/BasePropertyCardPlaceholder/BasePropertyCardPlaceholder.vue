<template>
  <div class="base-property-card-placeholder">
    <div class="placeholder-image">
      <div/>
    </div>
    <div class="content">
      <div/>&nbsp;<div/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-property-card-placeholder {
  background: var(--color-white-1);
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  position: relative;
  overflow: hidden;
  width: 100%;
}
.placeholder-image {
  width: 100%;
  padding-top: calc(100% / 3 * 2);
  position: relative;
  height: 0;
  div {
    position: absolute;
    top: calc(var(--spacing-2) / 2);
    left: calc(var(--spacing-2) / 2);
    width: calc(100% - var(--spacing-2));
    height: calc(100% - var(--spacing-4));
    border-radius: var(--border-radius-1);
    background: var(--color-gray-6);
  }
}
.base-property-card-placeholder .content {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  font-weight: var(--font-weight-bold);
  padding: var(--spacing-2) var(--spacing-4);
  & > div {
    height: 1em;
    border-radius: 100px;
    background: var(--color-gray-6);
    width: calc(50% - var(--spacing-5));
  }
}
.base-property-card-placeholder:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%);
  animation-name: shimmer;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: lienar;
  will-change: transform;
}
@keyframes shimmer {
  0% { transform: translate3d(-100%, 0, 0) }
  100% { transform: translate3d(100%, 0, 0) }
}
</style>
