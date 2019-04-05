<template>
  <router-link
    class="base-button-nav"
    :disabled="!link"
    tag="button"
    :to="link"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-nav {
  color: var(--color-medium-gray);
  font-weight: var(--font-weight-regular);
  cursor: pointer;
}
</style>
