<template>
  <input
    class="base-form-place"
    v-model="value"
    type="text">
</template>

<script>
export default {
  props: {
    value: {
      type: string,
      default: ''
    },
    placeholder: {
      type: string,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.base-form-place {
  background: var(--color-white);
  border-radius: var(--border-radius-1);
  font-weight: var(--font-weight-bold);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  font-size: 18px;
  line-height: normal;
}
</style>
