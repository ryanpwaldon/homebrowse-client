<template>
  <router-link class="base-profile" to="/profile">
    <img src="@/assets/img/profile.jpg">
  </router-link>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.base-profile {
  border-radius: 100%;
  box-shadow: var(--box-shadow-1);
  overflow: hidden;
}
img {
  height: 33px;
  display: block;
}
</style>
