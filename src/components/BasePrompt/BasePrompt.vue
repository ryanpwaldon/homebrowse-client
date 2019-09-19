<template>
  <div class="base-prompt">
    {{ text }}
  </div>
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
.base-prompt {
  width: 100%;
  color: var(--color-black-2);
  background: var(--color-white-1);
  border-radius: var(--border-radius-2);
  font-weight: var(--font-weight-regular);
  padding: var(--spacing-4);
  border: var(--border-1);
  line-height: normal;
  font-size: 14px;
}
</style>
