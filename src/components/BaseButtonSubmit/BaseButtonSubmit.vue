<template>
  <input
    class="base-button-submit"
    type="submit"
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
  font-weight: var(--font-weight-semibold);
  background: var(--color-dark-gray);
  border-radius: var(--border-radius-1);
  box-shadow: var(--box-shadow-1);
  padding: var(--spacing-2);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
