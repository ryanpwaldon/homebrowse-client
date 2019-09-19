<template>
  <div class="base-button-loader">
    <div class="container">
      <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 86" stroke-width="10">
        <path fill="none" stroke="var(--color-white-1)" d="M43,83A40,40,0,0,1,43,3"/>
        <path fill="none" stroke="var(--color-black-1)" d="M43,3a40,40,0,0,1,0,80"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.base-button-loader {
  width: 25px;
  position: relative;
}
.container {
  height: 0;
  width: 100%;
  padding-top: 100%;
  position: relative;
}
.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotate 1s linear 0s infinite;
  overflow: visible;
  fill: white;
  display: block;
}
@keyframes rotate {
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}
</style>
