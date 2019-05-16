<template>
  <input
    class="base-button-submit"
    type="submit"
    :value="text"
  >
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button-submit {
  color: var(--color-white);
  font-weight: var(--font-weight-regular);
  background: var(--color-black-2);
  border-radius: var(--border-radius-3);
  padding: var(--spacing-4) var(--spacing-5);
  font-size: 14px;
  width: 100%;
  cursor: pointer;
}
</style>
