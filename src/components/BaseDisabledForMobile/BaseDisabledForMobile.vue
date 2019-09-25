<template>
  <div class="base-disabled-for-mobile">
    <div class="container">
      <img class="logo" src="@/assets/img/logo-circle.svg">
      <div class="title">Homebrowse is not currently supported on mobile devices. Please use a desktop browser.</div>
      <router-link class="subtitle" to="/">Return to home</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-disabled-for-mobile {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background: var(--color-gray-5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.container {
  position: relative;
  width: 256px;
}
.logo {
  position: absolute;
  transform: translate(-50%, -100%);
  top: calc(-1 * var(--spacing-1));
  width: 40px;
  left: 50%;
}
.title {
  margin-bottom: var(--spacing-2);
}
.subtitle {
  font-weight: 600;
  text-decoration: underline;
}
</style>
