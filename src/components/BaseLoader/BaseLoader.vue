<template>
  <div class="base-loader">
    <img class="loader" src="@/assets/img/loader.svg">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-loader {
  width: 100%;
  height: 100%;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  width: 25px;
  height: 25px;
  animation: rotate 1s linear 0s infinite;
}
@keyframes rotate {
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}
</style>
